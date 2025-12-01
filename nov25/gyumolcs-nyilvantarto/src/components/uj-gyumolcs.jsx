import { useRef } from "react"
import { felvesz, listazGyumi } from "../../data";

export default function Ujyumolcs({setGyumolcsok}) {
    const inputNev = useRef();
    const inputRost = useRef();
    const inputCukor = useRef();

    function onSave(){

        const ujGyumolcs = {
            nev: inputNev.current.value,
            rosttartalom: +inputRost.current.value,
            cukortartalom: +inputCukor.current.value
        };

        felvesz(ujGyumolcs);
        setGyumolcsok(listazGyumi());
    }

    return (
        <section>
            <h2>Új gyümölcs felvétele</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Név</td>
                        <td>
                            <input ref={inputNev} type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>Rosttartalom: </td>
                        <td>
                            <input ref={inputRost} type="number" step={0.1}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Cukortartalom</td>
                        <td>
                            <input ref={inputCukor} type="number" step={0.1}/>
                        </td>
                    </tr>
                    <tr><td colSpan={2}><button onClick={onSave}>Mentés</button></td></tr>
                </tbody>
            </table>
        </section>
    )
}