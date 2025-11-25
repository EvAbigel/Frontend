export default function Auto({rendszam, evjarat, fogyasztas, onDelete}){
    return (
    <div className="auto">
        <h3>{rendszam}</h3>
        <p>Évjárat: {evjarat}</p>
        <p>Fogyasztás: {fogyasztas} L</p>
        <button onClick={onDelete}>Törlés</button>
    </div>
    );
}