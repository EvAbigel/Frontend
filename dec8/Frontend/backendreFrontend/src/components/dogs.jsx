import { Dog } from "./dog"

export function Dogs({kutyak, editingId, setEditingId}){   

    return (
        <section className="dogs-section">
            <div className="dogs-div">
                {kutyak.map(kutya => (
                    <Dog 
                    key={kutya.id} id={kutya.id} name={kutya.name} breed={kutya.breed} gender={kutya.gender} 
                    age={kutya.age} picurl={kutya.picurl}  editing={editingId === kutya.id} onEdit={() => setEditingId(kutya.id)} onStopEdit={()=> setEditingId(null)}/>
                ))}
            </div>
        </section>
    )
};