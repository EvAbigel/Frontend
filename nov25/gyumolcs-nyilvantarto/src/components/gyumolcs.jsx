export default function Gyumolcs({nev, rosttartalom, cukortartalom, onDelete}) {
    return (
        <tr>
            <td>{nev}</td>
            <td>{rosttartalom}</td>
            <td>{cukortartalom}</td>
            <td><button onClick={onDelete}>Törlés</button></td>
        </tr>
    )
}