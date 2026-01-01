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
        <div className="max-w-7xl mx-auto">
            <h1 className="font-semibold text-2xl p-1 md:text-3xl md:p-2">Featured</h1>
            <div className="flex flex-col justify-center items-center  h-auto py-4 md:p-5 gap-5">
                {
                    trendinglist && trendinglist.map((tool) => (

                        <div className="grid grid-cols-[60px_1fr] md:grid-cols-[1fr_3fr] w-full bg-card rounded-2xl gap-2 pr-4 py-2 shadow-[0_5px_5px_rgba(0,0,0,0.1)] overflow-hidden" key={tool.id}>

                            {/* Image Section */}
                            <div className="flex  justify-center items-center">
                                <img className={`max-w-10 max-h-10 ${tool.logotype === "white" ? "filter invert" : ""}`} src={tool.logo} alt="" />
                            </div>

                            {/* Content Section */}
                            <div className=" flex justify-center items-center gap-7  ">
                                <div className="flex flex-col">
                                <h1 className="font-semibold text-sm md:text-2xl">{tool.name}</h1>
                                <p className="mt-1 text-[10px] max-w-50 md:text-sm text-gray-600 line-clamp-2">{tool.shortDescription}</p>

                                <ul className="flex gap-2 mt-2">
                                    {tool.tags.map((tag, index) => (
                                        <li key={index} className={`${index>=3?"hidden":"flex"}
                                        border border-gray-300 text-gray-500 rounded-full px-1 py-0.5 t md:px-2 md:py-0.5 text-[8px]  tracking-wider`}>{tag}</li>
                                    ))}
                                </ul>
                                </div>

                                {/* This div pushes itself to the bottom-right */}
                                <div className="md:mt-auto md:self-end ">
                                    <a href={tool.website} target="_blank" rel="noreferrer noopener">
                                        <button className="px-3 py-1 text-xs md:px-6 md:py-1 primary-btn md:text-md text-white transition-all hover:-translate-y-1 duration-200 hover:shadow-lg hover:bg-indigo-600 rounded-lg">
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