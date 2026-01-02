import { NavLink } from "react-router-dom"
import { IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";

export const NavBar = () => {

    const[isOpen,setIsOpen]=useState(false)

    const links = [
        { name: "Home", path: "/" },
        { name: "Tools", path: "/toollist" },
        { name: "Prompts", path: "/prompt" },
        { name: "Bundles", path: "/Bundles" },
        { name: "Submit Tool", path: "/submittool" },
        { name: "Advertise", path: "/advertise" },
        { name: "Sign in", path: "/signin" },
        { name: "Login", path: "/login" },
    ]
    return (
        <div className="">
            <nav className="w-max-7xl p-3 flex font-primary font-weight border-b border-border justify-between  items-center shadow-md">
                <div className="">
                    <h1 className=" text-xl md:text-3xl text-white bg-black rounded-lg px-2 py-1">IntelliSpot</h1>
                </div>
                <div className={`${isOpen?"translate-x-0":"translate-x-full"} fixed top-0 right-0 transform transition-transform duration-300 bg-white w-64 h-full py-10 z-50`}>
                    <button onClick={()=>setIsOpen(!isOpen)} className="text-right w-full text-2xl px-7 py-3">✕</button>
                    <ul className="flex flex-col gap-7 text-xl px-10">
                        {links.map((links) => (
                            <li key={links.path}>
                                <NavLink to={links.path}

                                    className={({ isActive }) => `relative cursor-pointer font-medium after:absolute after:left-0 after:top-6
                                    after:h-0.5 after:w-0 after:bg-black
                                    after:transition-all after:duration-300
                                    hover:after:w-full
                                    ${isActive
                                            ? "text-black after:w-full"
                                            : "text-zinc-600 after:w-0 hover:text-black hover:after:w-full"}
                                `}
                                >
                                    {links.name}
                                </NavLink>
                            </li>
                        ))}

                    </ul>
                </div>
                <button onClick={()=>setIsOpen(!isOpen)} className="cursor-pointer border px-1 rounded-md font-medium
                 transition-colors duration-200
                 hover:bg-black hover:text-white">
                    <IoReorderThreeOutline className="text-3xl" />
                </button>
            </nav>

        </div>
    )
}