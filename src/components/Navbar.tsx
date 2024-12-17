"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Food<span className="text-[#FF9F0D]">tuck</span>
        </h1>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div >
            <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
            <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
            <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
            <li><Link href="./pages" className="hover:text-[#FF9F0D] transition">Pages</Link></li>
            <li><Link href="./about" className="hover:text-[#FF9F0D] transition">About</Link></li>
            <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
            <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-[200px] lg:w-[250px] ml-8">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
            />
            <IoSearch className="text-[#FF9F0D] ml-2" />
          </div>

          {/* Shopping Bag Icon */}
          <div className="ml-8">
            <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition" />
          </div>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div>
        <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
            <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
            <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
            <li><Link href="./pages" className="hover:text-[#FF9F0D] transition">Pages</Link></li>
            <li><Link href="./aboutus" className="hover:text-[#FF9F0D] transition">About</Link></li>
            <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
            <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
            </ul>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-full">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
          />
          <IoSearch className="text-[#FF9F0D] ml-2" />
        </div>

        {/* Shopping Bag Icon */}
        <div>
          <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition" />
        </div>
      </div>
    </nav>
  );
}
