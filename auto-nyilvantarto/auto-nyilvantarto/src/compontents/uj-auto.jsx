import { felvesz, listaz } from "../data"

export default function UjAuto({autok, setAutok}){
    function onSave(){
        const rendszam = document.getElementById("rendszam").value
        const evjarat = document.getElementById("evjarat").value * 1
        const fogyasztas = document.getElementById("fogyasztas").value * 1

        const ujAuto = {
            rendszam : rendszam,
            evjarat : evjarat,
            fogyasztas : fogyasztas,
        }

        felvesz(ujAuto);
        setAutok(listaz());
    }
    
    return <section className="uj-auto-section">
        <h2>Új autó felvétele</h2>
        <div className="uj-auto">
            <table>
                <tbody>
                    <tr>
                        <td>Rendszám:</td>
                        <td>
                            <input type="text" name="rendszam" id="rendszam" required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Évjárat:</td>
                        <td>
                            <input type="number" name="evjarat" id="evjarat" min={1900}/>
                        </td>
                    </tr>
                    <tr>
                    <td>Fogyasztás:</td>
                        <td>
                            <input type="number" name="fogyazstas" id="fogyasztas" step={0.1}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}> <button onClick={onSave}>Mentés</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
}