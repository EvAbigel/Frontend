import { NyitoOldal } from "./components/NyitoOldal";
import { Login, action as authlogin } from "./components/Login";
import { Termekek } from "./components/Termekek";
import {createBrowserRouter} from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <NyitoOldal/>,
    },
    {
        path: "/termekek",
        element: <Termekek/>,
    },
    {
        path: "/login",
        element: <Login/>,
        action: authlogin,
    }
])