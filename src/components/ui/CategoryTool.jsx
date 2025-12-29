import { useParams } from "react-router-dom"
import tools from "@/data/ToolData.json"
export const CategoryTool=()=>{

    const {category}=useParams()
    const FilteredTool=tools.filter(tool=>tool.category===category)
    return(
        <div>
 <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Category: {category}
      </h1>

      {FilteredTool.map((app) => (
        <div key={app.id} className="border p-3 mb-2">
          {app.name}
        </div>
      ))}
    </div>
        </div>
    )
}