import "bootstrap/dist/css/bootstrap.css" 
import './App.css'
import { NyitoOldal } from './components/nyitoOldal'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import NepSzamlalAdatok from "./components/nepSzamlalAdatok"
import UjFelmeres from "./components/ujFelmeres"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <NyitoOldal/>
  },
  {
    path: "/adatok", 
    element: <NepSzamlalAdatok/>
  },
  {
    path: "/ujadat",
    element: <UjFelmeres/>
  }
])

function App() {
return <RouterProvider router={router}/>
}

export default App
