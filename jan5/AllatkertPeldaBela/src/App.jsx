import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Nyitooldal from "./components/Nyitooldal";
import Allatok from "./components/Allatok";
import UjAllat from "./components/UjAllat";

const router = createBrowserRouter([
  { path: "/", element: <Nyitooldal /> },
  { path: "/allataink", element: <Allatok /> },
  { path: "/ujallat", element: <UjAllat /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
