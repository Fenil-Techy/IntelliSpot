export const Bundles = () => {
  const bundles = [
    {
      title: "Best tools for students",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for creators",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for developers",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for students",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for creators",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for developers",
      logos: [
        { src: "../logos/perplexity.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold mb-8">
        AI Tools Collections
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {bundles.map((bundle, index) => (
          <div
            key={index}
            className="border rounded-2xl bg-card p-5 flex flex-col gap-4 w-full max-w-sm"
          >
            <p className="text-2xl font-medium">{bundle.title}</p>

            <div className="flex items-center gap-4 ml-2">
              {bundle.logos.slice(0, 3).map((logo, i) => (
                <div
                  key={i}
                  className="relative flex items-center rounded-lg border-gray-300 p-1 border justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="z-10 h-auto object-cover w-8"
                  />
                
                  </div>
              ))}

              <p className="text-sm text-gray-500 self-end">...more</p>
            </div>
          </div>
        ))}
      </div>
            <button className=" mt-10 flex m-auto px-5 py-4 text-white rounded-lg text-md bg-indigo-500 transition-all hover:-translate-y-1 duration-100 hover:shadow-md hover:bg-indigo-600">Explore All Collections</button>
    
    </div>
  );
};
