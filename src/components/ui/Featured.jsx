import tools from "@/data/ToolData.json"
import { useEffect, useState } from "react"
export const FeaturedTools = () => {
    const [trendinglist, setTrendingList] = useState()

    const getTrendingTool = () => {
        const TrendingList = tools.filter(tool => tool.is_trending)
        setTrendingList(TrendingList)
        console.log(TrendingList)
    }

    useEffect(() => {
        getTrendingTool()
    }, [])

    return (
        <div className>
            <h1 className="font-semibold text-3xl p-2">Trending</h1>
            <div className=" flex flex-col justify-center items-center  h-auto p-5 gap-5">
                {
                    trendinglist && trendinglist.map((tool) => (

                        <div className="grid grid-cols-[1fr_3fr] h-36 w-full bg-card rounded-2xl shadow-[0_5px_5px_rgba(0,0,0,0.1)] overflow-hidden" key={tool.id}>

                            {/* Image Section */}
                            <div className="flex justify-center items-center">
                                <img className={`w-auto h-24 ${tool.logotype === "white" ? "filter invert" : ""}`} src={tool.logo} alt="" />
                            </div>

                            {/* Content Section */}
                            <div className="flex flex-col p-4">
                                <h1 className="font-semibold text-2xl">{tool.name}</h1>
                                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{tool.shortDescription}</p>

                                <ul className="flex gap-2 mt-2">
                                    {tool.tags.map((tag, index) => (
                                        <li key={index} className="border rounded-full px-2 py-0.5 text-[10px]  tracking-wider">{tag}</li>
                                    ))}
                                </ul>

                                {/* This div pushes itself to the bottom-right */}
                                <div className="mt-auto self-end ">
                                    <a href={tool.website} target="_blank" rel="noreferrer noopener">
                                        <button className="px-6 py-1 primary-btn text-md text-white transition-all hover:-translate-y-1 duration-200 hover:shadow-lg hover:bg-indigo-600 rounded-lg">
                                            Visit
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}