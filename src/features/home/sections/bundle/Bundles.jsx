export const Bundles = () => {
  const bundles = [
    {
      title: "Best tools for students",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
      description: "A curated bundle of powerful tools that helps students learn effectively, complete assignments faster, and build real-world skills in one place.",
      image: "./bundle/students.jpg"
    },
    {
      title: "Best tools for creators",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
      description: "An all-in-one bundle of tools that empowers creators to create faster, stay consistent, and grow their audience",
      image: "./bundle/creators.jpg"
    },
    {
      title: "Best tools for developers",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
      description: "This bundle brings together essential tools to support developers in coding, debugging, documentation, and project development",
      image: "./bundle/website.jpg"
    },
  ];

  return (
    <div className="max-w-7xl ">
      <h1 className="text-2xl md:text-3xl font-semibold mb-8">
        AI Tools Bundles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 place-items-center">
        {bundles.map((bundle, index) => (
          <div
            key={index}
            className="rounded-2xl bg-white shadow-[0_10px_15px_rgba(0,0,0,0.1)] flex flex-col gap-4 w-full pb-5 max-w-sm"
          >
            <div>
              <img src={bundle.image} alt="" className="rounded-2xl" />
            </div>
            <div className="flex flex-col gap-2 p-2">
              <p className="text-2xl font-semibold">{bundle.title}</p>
              <h1 className="text-sm text-zinc-400">{bundle.description}</h1>
            </div>

            <div className="flex justify-between px-4">
              <div className="flex items-center gap-2 md:gap-4">
                {bundle.logos.slice(0, 3).map((logo, i) => (
                  <div
                    key={i}
                    className="relative flex items-center rounded-lg border-gray-300 p-1 border justify-center"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="z-10 h-auto object-cover w-5"
                    />

                  </div>
                ))}
                <p className="text-xs text-gray-500 self-end">...more</p>
              </div>
              <div>
                <button className="px-3 py-2 text-white rounded-lg text-xs bg-indigo-500 transition-all hover:-translate-y-1 duration-100 hover:shadow-md hover:bg-indigo-600">Open</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className=" mt-6 flex m-auto text-sm px-3 py-2  md:px-5 md:py-4 text-white rounded-lg md:text-md bg-indigo-500 transition-all hover:-translate-y-1 duration-100 hover:shadow-md hover:bg-indigo-600">Explore All Bundles</button>

    </div>
  );
};
