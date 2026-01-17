export const ToolDetails = () => {

    const tooldetail = [{
        id:1,
        image: "/logos/gemini.png",
        provider:"Google LLC",
        name: "Google Gemini",
        tags: ["Multimodel", "Reasoning", "Research"],
        longDescription: "Google Gemini is Google’s next-generation AI, built to help you create, think, and innovate faster than ever. Powered by cutting-edge multimodal intelligence, Gemini understands and generates text, images, code, audio, and video—delivering smarter, more natural interactions across every task.From brainstorming ideas and crafting content to solving complex problems and building software, Gemini adapts to your workflow and amplifies productivity. Seamlessly integrated with Google’s ecosystem, it brings powerful AI assistance wherever you work.",
        features: [
            "All-in-one AI for writing, creativity, analysis, and coding",
            "Multimodal by design — works across text, images, audio, and video",
            "Advanced reasoning for deeper insights and better decisions",
            "Built for speed and scale with Google-grade performance",
            "Secure, reliable, and trusted Google infrastructure"
        ],
        website:"https://gemini.google.com/"
    }]

    return (
        <div className="mx-auto p-4">
            {
                tooldetail.map((detail) => (

                    <div key={detail.id}>

                        <div className="flex  gap-8 justify-center items-center">
                            <div>
                                <img src={detail.image} alt="gemini" className="w-25" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl font-semibold">{detail.name}</h1>
                                <p className="text-sm">{detail.provider}</p>
                            </div>
                            
                            

                        </div>
                        <div className="py-5">
                            <a href={detail.website}><button className="w-full text-center bg-indigo-500 text-white py-2 rounded-full">Visit</button></a>
                        </div>
                        
                        <div className="grid grid-cols-1 py-5">
                            <h1 className="text-xl font-semibold pb-3">About Tool</h1>
                            <p className="text-gray-600 leading-7">{detail.longDescription}</p>
                            <div className="pt-5">
                                <h1 className="text-lg font-semibold">Features</h1>
                                <ul className="flex flex-col gap-2 pt-2 list-disc list-inside">
                                    {
                                        detail.features.map((feature,index)=>(

                                            <li key={index} className="text-gray-600 ">{feature}</li>
                                    
                                        ))
                                    }
                                </ul>
                            </div>
                                <div>

                                    <ul className="grid grid-cols-3 gap-2 ">
                                    {detail.tags.map((tag,index)=>(
                                        <li key={index}className="rounded-full text-xs border-blue-500 bg-blue-50 text-blue-700 px- py-1">{tag}</li>
                                        
                                    ))}
                                    </ul>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}