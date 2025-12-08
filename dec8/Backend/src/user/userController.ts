import { Request, Response } from "express";
import mysql from "mysql2/promise";
import config from "../config/config";
import jwt from "jsonwebtoken";
import { File } from "../file/file";
import { uploadMiddleware } from "../middleware/upload";


export async function signIn(req:Request, res:Response){
    const {email, password} = req.body;
    if(!(email && password)) {
        return res.status(400).send({error: "Nem megfelelők az adatok."})
    }

    const connection = await mysql.createConnection(config.database)
    try{
        const [results] = await connection.query("SELECT login(?,?) as id", [email, password]) as Array<any>

        if(!results[0].id){
            return res.status(401).send({error: "Hiba"})
        }

        if(!config.jwtSecret){
            return res.status(400).send({error: "Hiba van a titkos kulcsal"})
        }

        const token = jwt.sign({userId:results[0].id}, config.jwtSecret, {expiresIn: "2h"});

        const [resultsdata] = await connection.query("SELECT email, id FROM users WHERE id = ?", [results[0].id]) as Array<any>

        return res.status(200).send({token: token, data: resultsdata});
    }
    catch(e){
        return console.log(e);
    }

}

export async function register(req:any, res:Response){
    const connection = await mysql.createConnection(config.database);

    try{
        await uploadMiddleware(req, res);
        const {email, password} = req.body;
        const file = req.file;

        const [results] = await connection.query("INSERT INTO users(email, password) VALUES(?,?)", [email, password]) as Array<any>;

        const newFile = new File(file, results.insertId)
        await newFile.saveToDatabase();
        
        if (results.affectedRows > 0){
            return res.status(200).send({ message: "Sikeres regisztráció!" });
        }
        else{
            return res.status(200).send({ message: "Sikertelen regisztráció!" });
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).send({ message: "Hibás regisztráció!" });
    }
}
