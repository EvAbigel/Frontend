import { listazGyumi, torol } from "../../data"
import Gyumolcs from "./gyumolcs"

export default function Gyumolcsok({gyumolcsok, setGyumolcsok}) {
    function gyumolcsTorol(nev){
        torol(nev)
        setGyumolcsok(nev)
        setGyumolcsok(listazGyumi())
    }
    return (
        <table className="gyumolcsok">
            <thead>
                <tr>
                    <th>Név</th>
                    <th>Rosttartalom</th>
                    <th>Cukortartalom</th>
                    <th>Törlés</th>
                </tr>
            </thead>
            <tbody>
                {
                    gyumolcsok.map( gy => (
                        <Gyumolcs {...gy} onDelete={()=>gyumolcsTorol(gy.nev)} key={gy.nev}/>
                    ))
                }
            </tbody>
        </table>
    )
}