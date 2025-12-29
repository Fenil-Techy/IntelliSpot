export const Bundles = () => {
  const bundles = [
    {
      title: "Best tools for students",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for creators",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for developers",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for students",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for creators",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
        { src: "../logos/claude.png", alt: "Claude" },
        { src: "../logos/gemini.png", alt: "Gemini" },
      ],
    },
    {
      title: "Best tools for developers",
      logos: [
        { src: "../logos/chatgpt.png", alt: "ChatGPT" },
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
            className="border rounded-2xl p-5 flex flex-col gap-4 w-full max-w-sm"
          >
            <p className="text-2xl font-medium">{bundle.title}</p>

            <div className="flex items-center gap-6 ml-2">
              {bundle.logos.slice(0, 3).map((logo, i) => (
                <div
                  key={i}
                  className="relative flex items-center justify-center"
                >
                  <div className="absolute w-11 h-11 rounded-lg bg-white shadow-[0px_1px_5px_rgba(0,0,0,0.3)]" />
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
    </div>
  );
};
