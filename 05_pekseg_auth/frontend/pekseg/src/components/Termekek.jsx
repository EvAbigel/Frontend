import { useEffect, useState } from "react"

export function Termekek(){

    const [termekek, setTermekek] = useState([]);

    useEffect(()=>{
        async function getAllTermekek(){
            const response = await fetch("http://localhost:3000/termekek")
            const resData = await response.json()

            setTermekek(resData);
        }

        getAllTermekek();
    },[])



    async function deleteTermek(id){
        const response = await fetch(`http://localhost:3000/termekek/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
        if(response.ok){
            setTermekek(termekek.filter((termek) => termek.id !== id));
        }
    }
        
    

    return (
        <div>
            <table id="tablazat">
                <thead>
                    <tr>
                        <th>Fénykép</th>
                        <th>Megnevezés</th>
                        <th>Fajta</th>
                        <th>Kiszerelés</th>
                        <th>Ízvilág</th>
                        <th>Miben mentes</th>
                        <th>Allergének</th>
                    </tr>
                </thead>
                <tbody>
                    {termekek.map((items) => (
                        <tr key={items.id}>
                            <td><img src={items.kepUrl} alt="" height={100} width={100}/></td>
                            <td>{items.megnevezes}</td>
                            <td>{items.fajta}</td>
                            <td>{items.kiszereles}</td>
                            <td>{items.iz}</td>
                            <td>{items.mentes}</td>
                            <td>{items.allergenek}</td>
                            {localStorage.getItem("token") && <td><button onClick={()=>deleteTermek(items.id)}>Törlés</button></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}