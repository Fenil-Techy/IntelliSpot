import { MdExpandMore } from "react-icons/md";


export const LoadMore = ({setIsExpanded,isExpanded}) => {
    return (
        <div className="mt-8 flex justify-center">
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition"
            >
                {isExpanded ? "Show less" : "Load more"}
                <MdExpandMore
                    className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""
                        }`}
                />
            </button>
        </div>
    )
}