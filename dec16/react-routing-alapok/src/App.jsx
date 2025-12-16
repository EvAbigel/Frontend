import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { ROUTING } from './routing-layout';

//olyan obj-t hoz létre amivel tudunk dolgozni

const router = createBrowserRouter(ROUTING);



function App() {
  return <RouterProvider router={router}/>
}

export default App
