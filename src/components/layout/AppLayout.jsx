import { Outlet } from "react-router-dom"
import { NavBar } from "./Navbar"
import {Footer} from "./Footer"
export const AppLayout=()=>{
    return(
        <div className="">
        <NavBar/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}