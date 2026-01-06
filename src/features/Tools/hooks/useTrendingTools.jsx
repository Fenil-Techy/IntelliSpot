import tools from "../data/ToolData.json";

export const useTrendingTools = () => {
  return tools.filter(tool => tool.is_trending);
};
