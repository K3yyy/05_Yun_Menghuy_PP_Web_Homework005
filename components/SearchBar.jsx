"use client";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const pathname = usePathname();

  
  const isBookRoute = pathname.includes("/book");
  const isCartoonRoute = pathname.includes("/cartoon");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      if (isBookRoute) {
        window.location.href = `/books/${searchQuery}`;
      } else if (isCartoonRoute) {
        window.location.href = `/cartoon/${searchQuery}`;
      }
    }
  };

  return (
    <div className="flex justify-between items-center w-[300px]">
      <form onSubmit={handleSearch} className="relative w-full">
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            isBookRoute ? "Search book by ID..." : "Search cartoon by ID..."
          }
          className="w-full bg-white py-3 pl-14 pr-5 rounded-xl h-12 border-none focus:border-none focus:ring-0 focus:outline-custom-sky-blue"
        />
        <button
          type="submit"
          className="absolute inset-y-0 left-0 flex items-center pl-4"
        >
          <Search className="w-6 h-6 text-primary-text" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
