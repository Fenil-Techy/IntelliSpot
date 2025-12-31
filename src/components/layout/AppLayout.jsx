import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar"
import {Footer} from "./Footer"
export const AppLayout=()=>{
    return(
        <div>
        <NavBar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}