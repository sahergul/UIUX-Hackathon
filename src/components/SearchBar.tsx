"use client"
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const items = ['Drinks', 'Dessert', 'MainCourse', 'starterMenu']; // Example data

  const handleInputChange = (event:any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log('Filtered Items:', filteredItems);
  };

  return (
    <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full">
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm w-50"
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <IoSearch className="text-[#FF9F0D] ml-2 cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default SearchBar;