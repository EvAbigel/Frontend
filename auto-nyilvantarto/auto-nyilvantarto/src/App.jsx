
import { useState } from 'react'
import './App.css'
import Autok from './compontents/autok';
import { listaz } from './data'
import UjAuto from './compontents/uj-auto';

function App() {
  const [autok, setAutok] = useState(listaz());
  
  return (
    <>
      <header>
        <h1>Autó nyilvántartó</h1>
      </header>
      <main>
        <Autok autok={autok} setAutok={setAutok}/>
        <UjAuto autok={autok} setAutok={setAutok}/>
      </main>
    </>
  )
}

export default App
