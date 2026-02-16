import kep from "../../../../forrás/indexkep.jpg"
import { Link, useNavigate } from "react-router-dom"


export function NyitoOldal(){
    const navi = useNavigate()

    return (
        <div className="container">
            <div className="row">
                <header className="mb-5">
                    <h1 className="mt-3">Pékség</h1>
                </header>
                <div className="col-6">
                    <div>
                        
                        <p>A pékség olyan létesítmény, amely kemencében sült lisztalapú ételeket, például kenyeret, kekszeket, süteményeket, fánkot, péksüteményeket és pitéket állít elő és értékesít.</p>
                        <p>Vedd fel velünk még ma a kapcsolatot elérhetőségeink egyikén, vagy ugorj be reggeli-, ebéd-, vagy vacsoraidőben finomságainkért! </p>
                    </div>
                    <div>
                        <h2>Nyitvatartás:</h2> <br />
                        <ul id="lista">
                            <li><b>Hétfő-Péntek:</b> 07:00- 17:00</li>
                            <li><b>Szombat:</b> 08:00-14:00</li>
                            <li><b>Vasárnap:</b> 08:00-14:00</li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <img id="indexkep" src={kep} alt="index kép" />
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link className="btn btn-warning" to={"/termekek"}>Termékeink</Link>
                    </div>
                    <div className="col-6">
                        {!localStorage.getItem("token")?
                        <Link className="btn btn-success" to={"/login"}>Bejelentkezés</Link>:
                        <button className="btn btn-success"  onClick={()=>{ localStorage.removeItem("token"); navi("/")}}>Kijelentkezés</button>}
                    </div>
                </div>
            </div>        
        </div>
    )
}