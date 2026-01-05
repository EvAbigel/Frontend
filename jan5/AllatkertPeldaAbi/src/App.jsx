import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import NyitoOldal from "./components/NyitoOldal";
import Allatok from "./components/allatok";

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { UjAllat } from "./components/ujAllat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NyitoOldal/>
  },
  {
    path: "/allataink",
    element: <Allatok/>
  },
  {
    path: "/ujallat",
    element: <UjAllat/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
