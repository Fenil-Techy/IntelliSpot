import { useState } from "react";
import { Link } from "react-router-dom";
import { MdExpandMore } from "react-icons/md";
import { LoadMore } from "../../../../shared/component/Loadmore";


export const PopularUsecase = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const UsageList = [
  { id: 0, que: "Build Website", total_count:20, icon: "💻" },
  { id: 1, que: "Generate Image", total_count:8, icon: "🖼️" },
  { id: 2, que: "Build Resume", total_count:10, icon: "📄" },
  { id: 3, que: "Make Reels", total_count:5, icon: "🎬" },
  { id: 4, que: "Write Email", total_count:20, icon: "✉️" },
  { id: 5, que: "Learn Skills", total_count:10, icon: "🧠" },
  { id: 6, que: "Learn Language", total_count:5, icon: "🌍" },
  { id: 7, que: "Create Youtube Content", total_count:17, icon: "📺" },
  { id: 8, que: "Generate Memes", total_count:10, icon: "😂" },
  { id: 9, que: "Invoice Generator", total_count:20, icon: "🧾" },
];


    // start from center
    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [isHovered, setIsHovered] = useState(false)

    // const prev = () => {
    //     const isFirstCard = currentIndex === 0
    //     const newIndex = isFirstCard ? UsageList.length - 1 : currentIndex - 1
    //     setCurrentIndex(newIndex)
    // }
    // const next = () => {
    //     const islastSlide = currentIndex === UsageList.length - 1
    //     const newIndex = islastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (isHovered) return;

    //         setCurrentIndex((prev) =>
    //             prev === UsageList.length - 1 ? 0 : prev + 1
    //         );
    //     }, 1500);

    //     return () => clearInterval(interval);
    // }, [isHovered]);

    return (
        <div className="max-w-7xl mx-auto ">
            <h1 className="font-semibold text-2xl md:text-3xl ">
                Popular Usage
            </h1>

            <div className="py-8 md:px-5 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6  place-items-center">
                    {UsageList.slice(0, isExpanded ? UsageList.length : 5).map((use) => (
                        <Link key={use.id} to="/Usage">
                            <div className="w-70 h-20 md:h-32 md:w-60 outline-indigo-300 outline rounded-xl border bg-card flex gap-2 justify-center items-center shadow-md transition-all duration-300 animate-in fade-in slide-in-from-top-2 hover:scale-105 hover:-translate-y-3 hover:bg-indigo-500 hover:text-white">
                                <h1>{use.icon}</h1>
                                <h1 className="font-medium text-md">{use.que}</h1>
                                <h1 className="text-sm text-gray-500">({use.total_count}+)</h1>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                <LoadMore isExpanded={isExpanded} setIsExpanded={setIsExpanded}/>
            </div>


        </div>
    );
};
