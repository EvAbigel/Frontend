import { useState } from "react"
import InputField from "./inputField"
import SubmitButton from "./submitButton"
import data from "../data";

export default function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const newEntry = {
            name: name,
            email: email,
            age: age
        }

        data.push(newEntry);
        console.log(newEntry)

        setName("")
        setEmail("")
        setAge("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputField title="Név" value={name} onChange={setName}/>
            <InputField title="Email" value={name} onChange={setEmail}/>
            <InputField title="Életkor" value={name} onChange={setAge}/>

            <SubmitButton/>
        </form>
    )
}

