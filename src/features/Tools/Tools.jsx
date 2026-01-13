import { useState } from "react"
import { CategoryList } from "./section/CategoryList"
import { SearchBar } from "./section/SearchBar"
import { ToolList } from "./section/ToolList"

export const Tools=()=>{
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    
    return (
        <div className="p-4">
            <CategoryList selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery}/>
            <ToolList selectedCategory={selectedCategory} searchQuery={searchQuery}/>
        </div>
    )
}