export function Dog({id, name, breed, gender, age, picurl, editing, onEdit, onStopEdit, onDelete}){

    return(
        <div className="dog-div">

            {editing ? (
                <>
                    <p>{id}</p>
                    <h3>Név:</h3> <input type="text" /> <br />
                    <img src={picurl} alt={picurl} />
                    <p>Fajta:</p> <input type="text" /> <br />
                    <p>Nem:</p> <input type="text" /><br />
                    <p>Kor:</p> <input type="text" /><br />
                    <button onClick={onStopEdit}>Szerkesztés</button>
                </>
            ) : (
                <>
                    <p>{id}</p>
                    <h3>Név: {name}</h3>
                    <img src={picurl} alt={picurl} />
                    <p>Fajta: {breed}</p>
                    <p>Nem: {gender === 1 ? "Hím" : "Nőstény"}</p>
                    <p>Kor: {age}</p>

                    <button onClick={onEdit}>Szerkesztés</button>
                    <button onClick={onDelete}>Törlés</button>
                </>
            )}

        </div>
    );
}
