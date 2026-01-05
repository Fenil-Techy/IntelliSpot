import { AllBtn } from "../components/AllBtn"
import { Bundles } from "../components/Home/bundle/Bundles"
import { Carousel } from "../components/Home/hero/Carousel"
import { Categories } from "../components/ui/Categories"
import { CTA } from "../components/Home/cta/CTA"
import { FeaturedTools } from "../components/Home/featured/Featured"
import { PopularUsecase } from "../components/Home/usecase/PopularUsecase"
import { PromptSection } from "../components/Home/prompt/PromptSection"
import { RecentlyAdded } from "../components/ui/RecentlyAdded"
import { Trending } from "../components/Home/trending/Trending"
export const Home = () => {

    return (
        <div className="max-w-7xl p-4 mx-auto">

            <section className="my-10  grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
                <div className=" flex flex-col">
                    {/* Heading with better leading/spacing */}
                    <h1 className="text-4xl  md:text-5xl xl:text-6xl font-bold text-center mb-4 leading-tight tracking-tight">
                        Discover the Best <br />
                        <span className="text-gray-900">AI Tools and Prompts</span> <br />
                        in one place.
                    </h1>

                    <p className="text-center text-md md:text-lg mt-4 text-gray-500 ">
                        From <span className="font-semibold text-black">prompts</span> to full
                        <span className="font-semibold text-black"> AI apps</span> — everything you need to build
                        <span className="font-semibold text-black"> faster</span>.
                    </p>

                    <div className=" flex justify-center items-center flex-wrap gap-4 mt-10">
                        <button className="bg-black rounded-lg text-white text-sm px-2 py-2 md:text-lg md:px-8 md:py-3 transition-transform duration-200 hover:-translate-y-1 active:scale-95 shadow-lg">
                            Explore All Tools
                        </button>
                        <button className="border border-gray-300 rounded-lg  text-sm px-2 py-2 md:text-lg md:px-8 md:py-3 transition-all duration-200 hover:bg-gray-50 hover:-translate-y-1 active:scale-95">
                            Browse Prompts
                        </button>
                    </div>

                    {/* Social Proof Section */}
                    <ul className="flex items-center justify-between md:gap-4 mt-12 opacity-50 text-base font-medium">
                        <li>500+ Tools</li>
                        <li className="text-gray-400">•</li>
                        <li>1000+ Prompts</li>
                        <li className="text-gray-400">•</li>
                        <li>10K+ Users</li>
                    </ul>
                </div>

                {/* The Carousel Container */}
                <div className="w-full shadow-2xl rounded-3xl overflow-hidden">
                    <Carousel />
                </div>
            </section>

            <hr className="my-10  text-gray-300" />
            <section className="grid grid-cols-1 md:grid-cols-2 md:place-items-center gap-3 ">
                <FeaturedTools />
                <Trending />
            </section >
            <AllBtn/>
            <hr className="my-10 text-gray-300" />
            {/* <section className="flex flex-col justify-center items-center  mt-5 ">
                <Categories />
            </section> */}

            <section className="mt-10 ">
                <PopularUsecase />
            </section>
            <hr className="my-10 text-gray-300" />
            <section className="flex flex-col justify-center items-center  mt-10 ">
                <PromptSection />
            </section>
            
            <hr className="my-10 text-gray-300" />
            <section className="flex flex-col justify-center items-center  mt-10 ">
                <Bundles />
            </section>
            <hr className="my-10 text-gray-300" />
            {/* <section className="flex flex-col justify-center items-center mt-10 ">
                <RecentlyAdded />
            </section>
            <hr className="my-10 text-gray-300" /> */}
            <section className="">
                <CTA />
            </section>
        </div >
    )
}