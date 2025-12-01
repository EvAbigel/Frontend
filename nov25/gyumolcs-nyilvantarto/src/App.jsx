import { useState } from 'react'
import './App.css'
import { listazGyumi } from '../data'
import Gyumolcsok from './components/gyumolcsok';
import Ujyumolcs from './components/uj-gyumolcs';

function App() {
  const [gyumolcsok, setGyumolcsok] = useState(listazGyumi());
  
  return (
    <>
      <header><h1>Gyümölcs nyilvántartó</h1></header>
      <main>
        <Gyumolcsok gyumolcsok={gyumolcsok} setGyumolcsok={setGyumolcsok}/>
        <Ujyumolcs setGyumolcsok={setGyumolcsok}/>
      </main>
    </>
  )
}

export default App
