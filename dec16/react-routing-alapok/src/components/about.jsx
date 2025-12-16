import { useNavigate } from "react-router-dom"

export default function About(){
    const navigate = useNavigate();

    function inputConfirm(e){
        if (e.key == "Enter")
            navigate(`/?input=${e.target.value}`);
    }

    return (
        <>
            <h1>About</h1>
            <ul>
                <li>Jack Black</li>
                <li>42 years old</li>
                <li>Web developer</li>
                <li>Javascript, React, Angular</li>
                <li>Fishing & Hunting</li>
            </ul>
            <div>
                <p>Type anything here: </p> <br/>
                <input type="text" onKeyDown={(e) => inputConfirm(e)}/>
            </div>
        </>
    )
}