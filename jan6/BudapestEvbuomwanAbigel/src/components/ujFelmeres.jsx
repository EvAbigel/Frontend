import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function UjFelmeres(){
    const navigate = useNavigate();
    
    const ev = new Date().toISOString().substring(0,10)

    const evszamInput = useRef(ev)
    const magyarInput = useRef("")
    const nemetInput = useRef("")
    const szlovakInput = useRef("")
    const egyebInput = useRef("")

    async function onSave(){
        const ujFelmeres = {
            evszam: parseInt(evszamInput.current.value),
            magyar: parseInt(magyarInput.current.value),
            nemet: parseInt(nemetInput.current.value),
            szlovak: parseInt(szlovakInput.current.value),
            egyeb: parseInt(egyebInput.current.value)
        };

        try {
            const response = await fetch("http://localhost:5000/meresek", {
                method: "POST",
                headers: {'Content-Type': "application/json"},
                body: JSON.stringify(ujFelmeres)
            })
            console.log(response)

            if (response.ok) navigate("/adatok")
        }
        catch(e){
            console.log(e); 
        }
    }

    return (
        <div className="container">
            <h2 className="my-4 text-center">Új állat regisztrálása</h2>
            <div className="row">
                    <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">

                    <div className="mb-3">
                        <label htmlFor="date" className="form-label">Felmérés dátuma</label>
                        <input ref={evszamInput} type="date" className="form-control" name="erkezes" defaultValue={ev}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="faj"> Magyarok mennyisége </label>
                        <input ref={magyarInput} className="form-control" type="text" id="magyar" name="magyar"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="faj"> Németek mennyisége </label>
                        <input ref={nemetInput} className="form-control" type="text" id="nemet" name="nemet"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="faj"> Szlovákok mennyisége </label>
                        <input ref={szlovakInput} className="form-control" type="text" id="szlovak" name="szlovak"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="faj"> Egyéb mennyisége </label>
                        <input ref={egyebInput} className="form-control" type="text" id="egyeb" name="egyeb"/>
                    </div>

                    
                    <div className="mb-3 text-center">
                        <button onClick={onSave} className="btn btn-primary px-5">Felvétel</button>
                    </div>

                </div>
            </div>
        </div>
    )
}