
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";
import { Menu } from "lucide-react";   // Import the hamburger menu icon from lucide-react
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";  // Import the sheet component from ShadCN
import SearchBar from "./SearchBar";

export default function HomeHeader() {
return (
  <nav className="bg-black text-white shadow-md sticky top-0">
    <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Large Screen Navigation */}
      <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
        {/* Navigation Links */}
        <div >
          <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
          <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
          <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
          <li><Link href="./pages" className="hover:text-[#FF9F0D] transition">Pages</Link></li>
          <li><Link href="../../about" className="hover:text-[#FF9F0D] transition">About</Link></li>
          <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
          <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
          </ul>
        </div>
  {/* Logo */}
  <h1 className="text-2xl font-bold">Food<span className="text-[#FF9F0D]">tuck</span>
      </h1>

        {/* Search Bar */}
        <SearchBar/>

        {/* Shopping Bag Icon */}
        <div className="ml-8">
          <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition" />
        </div>
      </div>

      {/* Mobile Menu Button (Hamburger Icon) using ShadCN Button */}
      <div className="md:hidden">
                            <Sheet>
  <SheetTrigger> <Menu className=" text-white"/> </SheetTrigger>
  <SheetContent>
  <nav>
  <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
          <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
          <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
          <li><Link href="./pages" className="hover:text-[#FF9F0D] transition">Pages</Link></li>
          <li><Link href="./about" className="hover:text-[#FF9F0D] transition">About</Link></li>
          <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
          <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
          </ul>
          </nav>
  </SheetContent>
</Sheet>
</div>
    </div>
  </nav>
)}