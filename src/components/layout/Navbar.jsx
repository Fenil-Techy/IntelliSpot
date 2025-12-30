import { NavLink } from "react-router-dom"
import { IoReorderThreeOutline } from "react-icons/io5";

export const NavBar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Tools", path: "/toollist" },
        { name: "AI Review", path: "/review" },
        { name: "Prompt", path: "/prompt" },
    ]
    return (
        <div>
            <nav className="flex font-primary font-weight  border-b border-border justify-between pl-20 items-center h-18 shadow-md">
                <div className="">
                    <h1 className="text-3xl text-white bg-black rounded-md px-2 py-1">IntelliSpot</h1>
                </div>
                <div>
                    <ul className="flex gap-7 text-xl pr-4">
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

                        <li className="cursor-pointer border px-1 rounded-md font-medium
                 transition-colors duration-200
                 hover:bg-black hover:text-white">
                            <IoReorderThreeOutline className="text-3xl"/>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>
    )
}