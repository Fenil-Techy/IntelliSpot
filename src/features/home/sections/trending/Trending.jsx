import { AllBtn } from "../../../../shared/AllBtn"
import { ToolCard } from "../../../Tools/components/ToolCard"
import { useTrendingTools } from "../../../Tools/hooks/useTrendingtools"
export const Trending = () => {
    const trendingtools=useTrendingTools()

    return (
         <div className="w-full mx-auto">
            <h1 className="font-semibold text-2xl p-1 md:text-3xl md:p-2">Trending</h1>
            <div className="flex flex-col justify-center items-center py-4 md:p-5 gap-5">
                {
                    trendingtools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool}/>
                    ))}
            </div>
        </div>
    )
}