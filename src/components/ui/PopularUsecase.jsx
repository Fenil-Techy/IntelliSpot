import { Link } from "react-router-dom";


export const PopularUsecase = () => {
    const UsageList = [
        {id:0,que:"Build Website"},
        {id:1,que:"Generate Image"},
        {id:2,que:"Build Resume"},
        {id:3,que:"Make Reels"},
        {id:4,que:"Write Email"},
        {id:5,que:"Learn Skills"},
        {id:6,que:"Learn Language"},
        {id:7,que:"Create Youtube Content"},
        {id:8,que:"Generate Memes"},
        {id:9,que:"Invoice Generator"},
    ]

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
        <div className="w-full ">
            <h1 className="font-semibold text-3xl p">
                Popular Usage
            </h1>

            <div className="grid grid-cols-5 w-full gap-10 place-items-center px-5 py-8  ">
                
                    {UsageList.map((use) => (
                        <Link key={use.id} to="/Usage">
                        <div className="h-32 w-60 rounded-xl border bg-card flex justify-center items-center shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:bg-indigo-500 hover:text-white hover:shadow-md">
                                    
                            <h1 className="font-medium text-lg">{use.que}</h1>
                        </div>
                                </Link>

                    ))}
            </div>
           
        </div>
    );
};
