import { Carousel } from "./Carousel";

export const Hero = () => {
  return (
    <section className="my-10 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-center mb-4 leading-tight tracking-tight">
          Discover the Best <br />
          <span className="text-gray-900">AI Tools and Prompts</span> <br />
          in one place.
        </h1>

        <p className="text-center text-md md:text-lg mt-4 text-gray-500">
          From <span className="font-semibold text-black">prompts</span> to full
          <span className="font-semibold text-black"> AI apps</span> — everything you need to build
          <span className="font-semibold text-black"> faster</span>.
        </p>

        <div className="flex justify-center items-center flex-wrap gap-4 mt-10">
          <button className="bg-black rounded-lg text-white text-sm px-2 py-2 md:text-lg md:px-8 md:py-3 transition-transform hover:-translate-y-1">
            Explore All Tools
          </button>
          <button className="border border-gray-300 rounded-lg text-sm px-2 py-2 md:text-lg md:px-8 md:py-3 hover:bg-gray-50">
            Browse Prompts
          </button>
        </div>

        <ul className="flex items-center justify-between md:gap-4 mt-12 opacity-50 text-base font-medium">
          <li>500+ Tools</li>
          <li>•</li>
          <li>1000+ Prompts</li>
          <li>•</li>
          <li>10K+ Users</li>
        </ul>
      </div>

      <div className="w-full shadow-2xl rounded-3xl overflow-hidden">
        <Carousel />
      </div>
    </section>
  );
};
