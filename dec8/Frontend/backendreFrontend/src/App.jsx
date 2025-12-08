import { useState, useEffect } from 'react'
import './App.css'
import { Dogs } from './components/dogs';

function App() {

  const url = "http://localhost:3000/dogs";

  function getApi(){
    return fetch(url)
    .then(response => response.json())
    .then(adatok => adatok)
  }
  const [dogs, setDogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(()=>{
    getApi().then(kutyak =>{ setDogs(kutyak)})
  }, [])

  return (
    <>
      <Dogs kutyak={dogs} editingId={editingId} setEditingId={setEditingId}/>
    </>
  )
}

export default App
