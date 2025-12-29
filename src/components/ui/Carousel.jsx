import tools from "@/data/ToolData.json"
import { useEffect, useState } from "react"
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos } from "react-icons/md";


export const Carousel=()=>{

    const[currentIndex,setCurrentIndex]=useState(0)
    const[featured,setFeatured]=useState([])

    const getFeaturedTool=()=>{
        const FeaturedTool=tools.filter(slide=>slide.is_featured)
        setFeatured(FeaturedTool)
        console.log(FeaturedTool)
    }

    const prev=()=>{
        const isfirstSlide=currentIndex===0
        const newIndex=isfirstSlide?featured.length-1:currentIndex-1
        setCurrentIndex(newIndex)
    }
    const next=()=>{
        const islastSlide=currentIndex===featured.length-1
        const newIndex=islastSlide?0:currentIndex+1
        setCurrentIndex(newIndex)
    }

    useEffect(()=>{
        if (featured===0) return;

        const interval=setInterval(()=>{
            setCurrentIndex((prev)=>prev===featured.length-1?0:prev+1)
        },3000)
        return ()=>clearInterval(interval)
    },[featured])
    useEffect(()=>{
        getFeaturedTool()
    },[])
    useEffect(()=>{
        setCurrentIndex(0)
    },[featured])
    return(
        <div className="relative w-full h-96 max-w-8xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500"
            style={{transform:`translateX(-${currentIndex*100}%)`}}>
                {
                    featured.map((slide)=>(
                        <div key={slide.id}
                            className=" relative bg-black w-full h-96 shrink-0
                             flex justify-center items-center"
                        >
                            <div className={`absolute right-30 flex justify-center items-center w-50 h-50 rounded-2xl ${slide.logotype==="white"?"bg-black":"bg-white"}`}>
                            <img src={slide.logo} className="absolute h-40 w-auto"/>
                            </div>
                            <h1 className="text-white text-6xl font-semibold top-12 left-30 absolute ">{slide.name}</h1>
                            <h2 className="text-white w-200 text-left top-35 left-30 absolute ">{slide.longDescription}</h2>
                            <a href={slide.website}>
                            <button className="text-white primary-btn border text-lg px-6 py-1 bottom-25 left-30 absolute transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1 ">
                            Visit</button>
                            </a>
                        </div>

                    ))
                }
            </div>
            <button onClick={prev} className=" text-white absolute left-4 top-1/2 -translate-y-1/2 bg-transparent px-1 py-1 text-2xl rounded">
                <MdOutlineArrowBackIos />
            </button>
            <button onClick={next} className="absolute text-white right-4 top-1/2 -translate-y-1/2 bg-transparent px-1 py-1 text-2xl rounded">
                <MdOutlineArrowForwardIos />
            </button>
        </div>
    )
}