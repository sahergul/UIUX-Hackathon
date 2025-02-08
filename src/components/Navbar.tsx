"use client";
import { useState } from "react";
import { Search, User } from 'lucide-react'
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Food<span className="text-[#FF9F0D]">tuck</span></h1>

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
              <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
              <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="hover:text-[#FF9F0D] transition">
                    Pages
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Pages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="./faq" className="w-full">FAQ</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="./error-404" className="w-full">Error 404</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li><Link href="./about" className="hover:text-[#FF9F0D] transition">About</Link></li>
              <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
              <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Search">
              <Search size={24} />
            </Link>
            <Link href="./signup" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="User Profile">
              <User size={24} />
            </Link>
            <Link href="./cart" className="text-white hover:text-[#FF9F0D] transition-colors" aria-label="Shopping Cart">
              <PiHandbagBold size={24} />
            </Link>
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
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="hover:text-[#FF9F0D] transition">
                  Pages
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Pages</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="./faq" className="w-full">FAQ</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="./error-404" className="w-full">Error 404</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li><Link href="./about" className="hover:text-[#FF9F0D] transition">About</Link></li>
            <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
            <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}