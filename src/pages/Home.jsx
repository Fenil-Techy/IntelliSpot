import { Bundles } from "../components/ui/Bundles"
import { Carousel } from "../components/ui/Carousel"
import { Categories } from "../components/ui/Categories"
import { CTA } from "../components/ui/CTA"
import { FeaturedTools } from "../components/ui/Featured"
import { PopularUsecase } from "../components/ui/PopularUsecase"
import { PromptSection } from "../components/ui/PromptSection"
import { RecentlyAdded } from "../components/ui/RecentlyAdded"
import { Trending } from "../components/ui/Trending"
export const Home = () => {

    return (
        <div className="h-auto w-350 mx-auto">
            <section className="my-7">
                <Carousel />
            </section>
            <section className="grid grid-cols-2  place-items-center gap-3 ">
                <Trending />
                <FeaturedTools/>
            </section>
            <hr className="my-10 text-gray-300" />
            {/* <section className="flex flex-col justify-center items-center  mt-5 ">
                <Categories />
            </section> */}
            
            <section className="flex flex-col justify-center items-center  mt-10 ">
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
            <section className="flex flex-col justify-center items-center mt-10 ">
                <CTA />
            </section>
        </div>
    )
}