import { useMemo } from "react"
import { ToolCard } from "../components/ToolCard"
import tools from "../data/ToolData.json"

export const ToolList = ({ selectedCategory, searchQuery }) => {
    const filteredTools = useMemo(() => {
        let filtered = tools

        // Handle special categories: All, Featured, Trending
        if (selectedCategory === "Featured") {
            filtered = filtered.filter(tool => tool.is_featured)
        } else if (selectedCategory === "Trending") {
            filtered = filtered.filter(tool => tool.is_trending)
        } else if (selectedCategory === "All" || !selectedCategory) {
            // Show all tools
            filtered = tools
        } else {
            // Filter by regular category
            filtered = filtered.filter(tool => tool.category === selectedCategory)
        }

        // Filter by search query
        if (searchQuery && searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase().trim()
            filtered = filtered.filter(tool => {
                const nameMatch = tool.name.toLowerCase().includes(query)
                const descMatch = tool.shortDescription?.toLowerCase().includes(query) || 
                                 tool.longDescription?.toLowerCase().includes(query)
                const tagsMatch = tool.tags?.some(tag => tag.toLowerCase().includes(query))
                const categoryMatch = tool.category?.toLowerCase().includes(query)
                
                return nameMatch || descMatch || tagsMatch || categoryMatch
            })
        }

        return filtered
    }, [selectedCategory, searchQuery])

    const getTitle = () => {
        if (searchQuery && searchQuery.trim() !== "") {
            return `Search Results for "${searchQuery}"`
        }
        if (!selectedCategory || selectedCategory === "All") {
            return "All Tools"
        }
        return `${selectedCategory} Tools`
    }

    return (
        <section className="mt-8">
            <h1 className="font-bold text-2xl py-2 mb-4">{getTitle()}</h1>
            <div className="grid grid-cols-1 place-items-center py-4 px-4 md:p-5 gap-5">
                {filteredTools.length > 0 ? (
                    filteredTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool}/>
                    ))
                ) : (
                    <p className="text-gray-500 py-8">No tools found</p>
                )}
            </div>
        </section>
    )
}
