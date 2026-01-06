import { ToolCard } from "../../../Tools/components/ToolCard"
import { useTrendingTools } from "../../../Tools/hooks/useTrendingtools"

export const FeaturedTools = () => {

    const featuredTools=useTrendingTools()

    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="font-semibold text-2xl p-1 md:text-3xl md:p-2">Featured</h1>
            <div className="flex flex-col justify-center items-center py-4 md:p-5 gap-5">
                {
                    featuredTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool}/>
                    ))
                }

            </div>
        </div>
    )
}