export const SearchBar = () => {
  return (
    <div className="py-10 flex items-center max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search AI Tool"
        className="w-full h-10 px-4 border border-gray-300 rounded-l-full focus:outline-none focus:ring-1 focus:ring-gray-800"
      />
      <button className="h-10 px-4 bg-gray-800 text-white rounded-r-full hover:bg-gray-700">
        Search
      </button>
    </div>
  );
};
