// components/SearchBar.tsx
import React from "react";
import { IoSearch } from "react-icons/io5"; // Import the search icon

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        className="w-full p-2 pl-10 border rounded-full bg-black focus:outline-none border-orange-400 text-white"
      />
      <IoSearch className="absolute left-3 top-3 text-white" />
    </div>
  );
};

export default SearchBar;