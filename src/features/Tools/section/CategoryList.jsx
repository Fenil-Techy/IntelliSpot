import { useState } from "react";
import { LoadMore } from "../../../shared/component/Loadmore";

export const CategoryList=({ selectedCategory, onCategoryChange })=>{

    const[isExpanded,setIsExpanded]=useState(false)

    const list = [
  { id: 0, name: "All" },
  { id: -1, name: "Featured" },
  { id: -2, name: "Trending" },
  { id: 1, name: "Productivity" },
  { id: 2, name: "Design" },
  { id: 3, name: "Chatbot" },
  { id: 4, name: "Music" },
  { id: 5, name: "Video" },
  { id: 6, name: "Writing" },
  { id: 7, name: "Data & Analytics" },
  { id: 8, name: "Learning & Research" },
  { id: 9, name: "E-commerce" },
  { id: 10, name: "Gaming" },
  { id: 11, name: "Healthcare" },
  { id: 12, name: "Finance" },
  { id: 13, name: "Marketing" },
  { id: 14, name: "Image" },
  { id: 15, name: "Audio" },
  { id: 16, name: "Automation" },
  { id: 17, name: "Translation" },
  { id: 18, name: "Virtual Assistant" },
  { id: 19, name: "Customer Support" },
  { id: 20, name: "SEO" },
  { id: 21, name: "Social Media" },
  { id: 22, name: "Presentation" },
  { id: 23, name: "Project Management" },
  { id: 24, name: "Code Assistance" },
  
];

    const handleCategoryClick = (categoryName) => {
        if (selectedCategory === categoryName) {
            onCategoryChange(null)
        } else {
            onCategoryChange(categoryName)
        }
    }

    return(
        <section>
            <h1 className="font-bold text-2xl py-2 mb-4">Categories</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    list.slice(0,isExpanded?list.length:9).map((type)=>(
                        <button 
                            key={type.id} 
                            onClick={() => handleCategoryClick(type.name)}
                            className={`px-2 py-1 border text-sm rounded-2xl transition-colors ${
                                selectedCategory === type.name 
                                    ? "border-blue-500 bg-blue-50 text-blue-700" 
                                    : "border-gray-400 hover:border-gray-600"
                            }`}
                        >
                            {type.name}
                        </button>
                    ))
                }
            </div>
                <LoadMore isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
        </section>
    )
}