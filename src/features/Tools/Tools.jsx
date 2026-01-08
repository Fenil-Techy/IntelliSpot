import { CategoryList } from "./section/CategoryList"
import { SearchBar } from "./section/SearchBar"
export const Tools=()=>{
    return (
        <div className="p-4">
            <CategoryList/>
            <SearchBar/>
        </div>
    )
}