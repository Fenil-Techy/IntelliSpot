import { Link } from "react-router-dom";

export const ToolCard = ({ tool }) => {
  return (
    <Link to={`/tool/${tool.id}`} className="w-full">
    <div className="grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_3fr] w-full bg-card rounded-2xl py-2 pr-2 shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
      
      
      <div className="flex justify-center items-center">
        <img
          className={`max-w-13 max-h-13 ${tool.logotype === "white" ? "filter invert" : ""}`}
          src={tool.logo}
          alt={tool.name}
        />
      </div>

      {/* Content */}
      <div className="flex justify-center items-center gap-3">
        <div className="flex flex-col">
          <h1 className="font-semibold text-md md:text-2xl">{tool.name}</h1>

          <p className="mt-1 text-xs max-w-50 md:text-sm text-gray-600 line-clamp-2">
            {tool.shortDescription}
          </p>

          <ul className="flex gap-2 mt-2">
            {tool.tags.slice(0, 3).map((tag, index) => (
              <li
                key={index}
                className="border border-gray-300 text-gray-500 rounded-full px-1 py-0.5 md:px-2 md:py-0.5 text-[10px] tracking-wider"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:mt-auto md:self-end md:flex flex-col gap-2 justify-center items-center  ">
          <a href={tool.website} target="_blank" rel="noreferrer noopener">
            <button className="px-3 py-1 mr-2 text-xs md:px-6 md:py-1 primary-btn md:text-md text-white transition-all hover:-translate-y-1 duration-200 hover:shadow-lg hover:bg-indigo-600 rounded-lg">
              Visit
            </button>
          </a>

          <Link to={`/tool/${tool.id}`}>
          <button className="text-gray-400 text-xs">Get Details</button>
          </Link>
        </div>
      </div>
    </div>
    </Link>
  );
};
