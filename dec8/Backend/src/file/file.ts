import mysql from "mysql2/promise"
import config from "../config/config"
import fs from "fs"

export interface IFile{
    fileId: string,
    fileName: string,
    uploadTime?: Date | null,
    mineType: string,
    fileSize: number
}

export interface IMulterFile{
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
}

export class File implements IFile{
    fileId: string
    fileName: string
    uploadTime?: Date | null
    mineType: string
    fileSize: number
    userId?: number

    getAllData = () => {
        return this
    }

    constructor(file: IMulterFile, userId:number){
        this.fileId = file.filename,
        this.fileName = file.originalname,
        this.mineType = file.mimetype,
        this.fileSize = file.size,
        this.userId = userId 
    }

    async saveToDatabase() {
        const connection = await mysql.createConnection(config.database);

        try {
            await connection.beginTransaction();
            let [results]:any = await connection.query(
                "insert into files (fileId, fileName, mineType, fileSize) values (?,?,?,?)", [this.fileId, this.fileName, this.mineType, this.fileSize]
            ) as Array<any>
            if (results.affectedRows === 0) {
                throw "Hiba a Files táblába történő mentéskor!";
            }

            [results] = await connection.query(
                "insert into userFiles values (?,?)", [this.userId, this.fileId]
            ) as Array<any>
            if (results.affectedRows === 0) {
                throw "Hiba a userFiles táblába történő mentéskor!";
            }
            await connection.commit();
            
        } 
        catch (err) {
            console.log(err);
            this.deleteFileDir();
            await connection.rollback();

            throw err;
        }
    }

    deleteFileDir(){
        try{
            fs.unlinkSync(config.baseDir + config.uploadDir + this.fileId);
        }
        catch(err){
            throw err;
        }
    }

}
