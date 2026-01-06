import tools from "@/features/tools/data/ToolData.json"
import { useEffect, useState} from "react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        const featuredTools = tools.filter(slide => slide.is_featured);
        setFeatured(featuredTools);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev === featured.length - 1 ? 0 : prev + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev === 0 ? featured.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (featured.length <= 1) return;

        // We create the interval here
        const interval = setInterval(() => {
            next(); 
        }, 3000);

        return () => clearInterval(interval);
    }, [featured.length]); 

    return (
        <div className="relative w-full h-96 mx-auto overflow-hidden group rounded-2xl">

            <div 
                className="flex transition-transform duration-500 ease-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {featured.map((slide) => (
                    
                    <div 
                        key={slide.id}
                        className="w-full h-full shrink-0 bg-gray-950 flex flex-col justify-center items-center gap-10 "
                    >
                        <div className="flex flex-col justify-center items-center max-w-70 max-h-80  overflow-hidden">
                            <h1 className="text-white text-2xl md:text-6xl font-semibold">{slide.name}</h1>
                            <p className="text-gray-300 text-sm text-left mt-3 hidden md:mt-6 md:line-clamp-2">
                                {slide.shortDescription}
                            </p>
                            
                            <ul className=" grid grid-cols-3 gap-3 mt-6">
                                {slide.tags.map((tag, index) => (
                                    <li key={index} className={`${index >= 3 ? "hidden sm:flex" : "flex"} justify-center items-center border border-gray-500 text-white  rounded-full px-2 py-1 md:px-3 md:py-1 text-xs md:text-xs md:tracking-wider`}>
                                        {tag}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-6  justify-center items-center mt-8">
                                <a href={slide.website} target="_blank" rel="noreferrer">
                                    <button className="text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg text-sm px-4 py-1 md:text-lg md:px-8 md:py-2 transition-all duration-200 hover:-translate-y-1">
                                        Visit
                                    </button>
                                </a>
                                <a href={`/tool/${slide.id}`} className="text-gray-400 underline underline-offset-4 text-xs md:text-sm hover:text-white transition-colors">
                                    Get Details
                                </a>
                            </div>
                        </div>

                        
                        <div className={`-order-1 flex justify-center items-center max-w-20 max-h-20 rounded-2xl  shrink-0 ${slide.logotype === "white" ? "bg-black" : "bg-white"}`}>
                            <img src={slide.logo} alt={slide.name} className=" w-full h-20 object-contain" />
                        </div>
                    </div>
                ))}
            </div>

            {featured.length > 1 && (
                <>
                    <button 
                        onClick={prev} 
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-3xl transition-colors"
                        aria-label="Previous slide"
                    >
                        <MdOutlineArrowBackIos />
                    </button>
                    <button 
                        onClick={next} 
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-3xl transition-colors"
                        aria-label="Next slide"
                    >
                        <MdOutlineArrowForwardIos />
                    </button>
                </>
            )}
            
           
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featured.map((_, i) => (
                    <div 
                        key={i} 
                        className={`h-1.5 w-1.5 rounded-full transition-all ${currentIndex === i ? "bg-white w-4" : "bg-white/30"}`}
                    />
                ))}
            </div>
        </div>
    );
};