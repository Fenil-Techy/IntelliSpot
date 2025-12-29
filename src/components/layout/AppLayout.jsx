import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar"
import {Footer} from "./Footer"
export const AppLayout=()=>{
    return(
        <div>
        <NavBar/>
        <main className="min-h-screen">
        <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}