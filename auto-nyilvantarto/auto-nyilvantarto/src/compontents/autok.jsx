import { listaz, torol } from "../data"
import Auto from "./auto"

export default function Autok({autok, setAutok}){
    function deleteAuto(rendszam){
        torol(rendszam)
        setAutok(listaz())
    }

    return (
        <section className="autok-section">
            <h2>Autók listája</h2>
            <div className="autok">
                {autok.map(auto => (
                    <Auto {...auto} onDelete={()=> deleteAuto(auto.rendszam)} key={auto.rendszam}/>
                ))}
            </div>
        </section>
    )
}