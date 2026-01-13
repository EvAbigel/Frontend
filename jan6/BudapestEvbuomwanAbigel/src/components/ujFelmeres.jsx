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

    const [isValid, setIsValid] = useState({
        magyar: false,
        nemet: false,
        szlovak: false,
        egyeb: false
    })

    const [isEdit, setIsEdited] = useState({
        magyar: false,
        nemet: false,
        szlovak: false,
        egyeb: false
    })


    function inputValidate(inputText, inputName){
        setIsValid(prev =>({
            ...prev,
            [inputName]: inputText.length > 0
        }))

        setIsEdited(prev =>({
            ...prev,
            [inputName]: true,
        }))
    }

    async function onSave(){
        if (isValid.magyar && isValid.nemet && isValid.szlovak && isValid.egyeb){
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
    }}

    //üres lakosság, ugyanolyan évszám, üres mező validálás

    return (
        <div className="container">
            <h2 className="my-4 text-center">Új állat regisztrálása</h2>
            <div className="row">
                    <div className="offset-lg-3 offset-md-2 col-lg-6 col-md-8 col-12">

                    <form onSubmit={onSave}>

                        <div className="mb-3">
                        <div className="row">
                            <div className="col-6 text-start">
                                <label htmlFor="date" className="form-label">Felmérés dátuma</label>
                            </div>
                            <div className="col-6 text-end">
                                {   } 
                            </div>
                        </div> 
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
                            <button className="btn btn-primary px-5">Felvétel</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    )
}