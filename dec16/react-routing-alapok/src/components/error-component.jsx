import { Link } from "react-router-dom"

export default function ErrorComponent(){
    return (
        <div>
            <h1 style={{color: "red"}}>404 - This page not found!</h1>
            <h2>Go back to the home page!</h2>
            <Link to="/">
                <button>Home Page</button>
            </Link>
        </div>
    )
}