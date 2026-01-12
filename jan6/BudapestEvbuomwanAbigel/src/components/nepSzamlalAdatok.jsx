import { useEffect } from "react";
import { useState } from "react";

export default function NepSzamlalAdatok(){
    const [adatok, setAdatok] = useState([])
    
    useEffect(()=>{
        async function getAdatok() {
            try{
                const response = await fetch("http://localhost:5000/meresek")
                const resData = await response.json();

                const ordered = resData.sort((a, b) => b.evszam - a.evszam)

                setAdatok(ordered)
            }
            catch(err){
                console.log(err);
            }
        }
        getAdatok()
    }, []);

    async function deleteData(evszam) {
        if (!confirm(`Biztosan törölni szeretnéd a ${evszam} évi felmérést?`)) {
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/meresek", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ evszam: evszam })
            });

            if (response.ok) {
                setAdatok(adatok.filter(adat => adat.evszam !== evszam));
                alert("Sikeres törlés!");
            } else {
                alert("Hiba történt a törlés során!");
            }
        } catch (err) {
            console.log(err);
            alert("Hiba történt a törlés során!");
        }
    }

    return (
        <div>
            <h1 className="mb-5">Jelenlegi adatok</h1>
            <table className="table table-striped" id="tabla">
                <thead>
                    <tr>
                        <th>Évszám</th>
                        <th>Magyar</th>
                        <th>Német</th>
                        <th>Szlovák</th>
                        <th>Egyéb adat</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody id="tablaBody">
                    {
                        adatok.map(adat => {return (<tr key={adat.evszam}>
                            <td>{adat.evszam}</td>
                            <td>{adat.magyar}</td>
                            <td>{adat.nemet}</td>
                            <td>{adat.szlovak}</td>
                            <td>{adat.egyeb}</td>
                            <td>
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteData(adat.evszam)}
                                >
                                    Törlés
                                </button>
                            </td>
                        </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}