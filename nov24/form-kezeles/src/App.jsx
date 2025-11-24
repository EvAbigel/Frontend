import { useState, useRef } from 'react'
import './App.css'


function App() {
  const [enteredUsername, setEnteredUsername] = useState("");
  
  function handleChange(event){
    setEnteredUsername(event.target.value);
  }

  function handleOnclick(){
    console.log(enteredUsername)
  }

  const nameInput = useRef();
  const [enteredName, setEnteredName] = useState(null);

  function handleClick2(){
    setEnteredName(nameInput.current.value);
    console.log(nameInput.current.value)
  }

  const focusInput = useRef();

  function handleClick3(){
    focusInput.current.focus();
  }

  return (
    <>
     <h1>Üdvözöllek {enteredUsername}</h1>
     <p>
        Felhasználónév: <br /> 
        <input 
          type="text" 
          name='username' 
          onChange={handleChange} 
          value={enteredUsername}
          />
          <br />
        <button onClick={handleOnclick}>Mentés</button>
      </p>
      <h1>Üdvözöllek {enteredName}</h1>
      <p>
        Név: <br /> 
        <input ref={nameInput} type="text" name='name'/><br />
        <button onClick={handleClick2}>Mentés</button>
      </p>
      <p>
        <label htmlFor=""></label>
        <input ref={focusInput} type="text" />
        <button onClick={handleClick3}>Focus</button>
      </p>
    </>
  )
}

export default App
