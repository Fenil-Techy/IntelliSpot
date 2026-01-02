export const CTA = () => {
    return (
        <div class="w-max-7xl ">
            <div className="relative rounded-2xl flex flex-col justify-center items-center w-full  h-96 bg-black">

            <img src="./logos/gemini.png" className="absolute w-13 h-13 left-10 bottom-10 md:left-20 md:bottom-20 md:h-20 md:w-20" />
            <img src="./logos/claude.png" className="absolute w-13 h-13 left-30 top-2 md:left-50 md:top-2 md:h-15 md:w-15" />
            <img src="./logos/lovable.png" className="absolute w-10 h-10 right-10 bottom-5 md:left-100 md:bottom-5 md:h-15 md:w-15" />
            <img src="./logos/perplexity.png" className="absolute w-10 h-10 right-10 top-10 md:right-10 md:top-20 md:h-20 md:w-20" />
            <img src="./logos/midjourney.png" className="absolute w-13 h-13 left-2 top-15 md:left-80 md:bottom-30 md:h-20 md:w-20" />
            <div className="text-white flex gap-2 mb-10" >
                <p className="text-3xl md:text-6xl font-semibold">Built an AI Tool?<br />Get Discovered.</p>
            </div>
            <div className="text-white flex gap-10">
                <button className="border rounded-lg border-white text-sm px-3 py-2 transistion-transform duration-200 hover:-translate-y-2">Submit Tool</button>
                <button className="border rounded-lg border-white text-sm px-3 py-2 transistion-transform duration-200 hover:-translate-y-2">Promote Tool</button>
            </div>
            </div>
        </div>

    )
}