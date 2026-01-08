import { useState } from "react";
import { LoadMore } from "../../../shared/component/Loadmore";

export const CategoryList=()=>{

    const[isExpanded,setIsExpanded]=useState(false)

    const list = [
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

    return(
        <section>
            <h1 className="font-bold text-2xl py-2 mb-4">Categories</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    list.slice(0,isExpanded?list.length:6).map((type)=>(
                        <button key={type.id} className="px-2 py-1 border text-sm border-gray-400 rounded-2xl">{type.name}</button>
                    ))
                }
            </div>
                <LoadMore isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
        </section>
    )
}