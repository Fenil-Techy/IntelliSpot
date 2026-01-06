import tools from "@/features/tools/data/ToolData.json"
import { useEffect, useState } from "react"
export const RecentlyAdded = () => {
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
        <div>
            <h1 className="w-350 font-semibold text-3xl p-2">Recently Added</h1>
            <div className="grid grid-cols-2 w-350 h-auto p-5 gap-10">
                {
                   trendinglist&& trendinglist.map((tool) => (

                        <div className="grid grid-cols-[1fr_3fr] h-40 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.3)]" key={tool.id}>

                            <div className="flex justify-center items-center relative">
                                <div className="flex justify-center items-center absolute w-30 h-30 rounded-2xl bg-white  left-5 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                                </div>
                                <img className={`z-10 w-auto h-24 -left-2 ${tool.logotype==="white"?"filter invert":""}`} src={tool.logo} alt="" />
                            </div>

                            <div className="flex flex-col h-full">
                                <h1 className="font-semibold text-2xl mt-2">{tool.name}</h1>
                                <p className="mt-1">{tool.shortDescription}</p>
                                <ul className="flex gap-2 mt-2">
                                    {
                                        tool.tags.map((tag,index)=>
                                            <li key={index} className="border rounded-4xl px-2 py-1 text-xs">{tag}</li>
                                        )
                                    }
                                </ul>
                                <div className="flex justify-end mr-6">
                                    <a href={tool.website} target="_blank" rel="noreferrer noopener " >
                                        <button className="mt-auto self-end px-5 py-1 bg-black text-lg text-white transition-all hover:-translate-y-1 duration-200 hover:shadow-lg hover:bg-[rgba(0,0,0,0.5)] ">Visit</button>
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