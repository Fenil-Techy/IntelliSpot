export const CTA = () => {
    return (
        <div class="w-full relative flex flex-col justify-center items-center  h-96 bg-black p-10">
            <img src="./logos/gemini.png" className="absolute left-20 bottom-20 h-20 w-20" />
            <img src="./logos/claude.png" className="absolute left-50 top-2 h-15 w-15" />
            <img src="./logos/lovable.png" className="absolute left-100 bottom-5 h-15 w-15" />
            <img src="./logos/perplexity.png" className="absolute right-10 top-20 h-20 w-20" />
            <img src="./logos/midjourney.png" className="absolute right-80 bottom-30 h-20 w-20" />
            <div className="text-white flex gap-2 mb-20" >
                <p className="text-6xl font-semibold">Built an AI Tool? Get Discovered.</p>
            </div>
            <div className="text-white flex gap-10">
                <button className="border border-white text-lg px-4 py-2 transistion-transform duration-200 hover:-translate-y-2">Submit Tool</button>
                <button className="border border-white text-lg px-4 py-2 transistion-transform duration-200 hover:-translate-y-2">Promote Tool</button>
            </div>
        </div>

    )
}