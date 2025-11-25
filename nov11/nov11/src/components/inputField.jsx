export default function InputField({title, value, onChange  }){
    return (
        <>
            <label>{title}</label>
            <br/>
            <input 
                type="text"
                value={value}
                onChange={(e)=> onChange(e.target.value)}
            />
            <br/>
        </>
    )
}