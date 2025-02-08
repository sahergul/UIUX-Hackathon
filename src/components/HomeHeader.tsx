import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";
import { Menu } from "lucide-react";   // Import the hamburger menu icon from lucide-react
import SearchBar from "./SearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";  // Import the sheet component from ShadCN

export default function HomeHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search query change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    // You can add additional logic here to handle the search query, such as filtering content on the home page
    console.log("Search Query:", query);
  };

  return (
    <main className="sticky top-0">
      {/* Logo */}
      <h1 className="text-2xl font-bold bg-black text-center text-white pt-6">Food<span className="text-[#FF9F0D]">tuck</span></h1>
      <nav className="bg-black text-white shadow-md">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
          {/* Large Screen Navigation */}
          <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
            {/* Navigation Links */}
            <div>
              <ul className="flex space-x-6 text-white">
                <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
                <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
                <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="hover:text-[#FF9F0D] transition">
                      Pages
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel className="text-white"></DropdownMenuLabel>
                      <DropdownMenuSeparator className="text-white" />
                      <DropdownMenuItem>
                        <Link href="./faq" className="text-white">FAQ</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="./pages" className="text-white">Error 404</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li><Link href="./about" className="hover:text-[#FF9F0D] transition">About</Link></li>
                <li><Link href="./shop" className="hover:text-[#FF9F0D] transition">Shop</Link></li>
                <li><Link href="./contact" className="hover:text-[#FF9F0D] transition">Contact</Link></li>
              </ul>
            </div>
            {/* Search Bar */}
            <div className="bg-black border-orange-400 rounded-full text-black flex">
              <SearchBar onSearch={handleSearchChange} />
              {/* Shopping Bag Icon */}
              <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition my-2 mx-3" />
            </div>
          </div>
          {/* Mobile Menu Button (Hamburger Icon) using ShadCN Button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger> <Menu className=" text-white"/> </SheetTrigger>
              <SheetContent>
                <nav>
                  <ul className="flex flex-col space-y-4">
                    <li><Link href="/" className="hover:text-[#FF9F0D] transition">Home</Link></li>
                    <li><Link href="./menu" className="hover:text-[#FF9F0D] transition">Menu</Link></li>
                    <li><Link href="./blog" className="hover:text-[#FF9F0D] transition">Blog</Link></li>
                    <li>
                      <DropdownMenu>
                        <DropdownMenuTrigger className="hover:text-[#FF9F0D] transition">
                          
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel></DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link href="./faq" className="w-full">FAQ</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link href="./pages" className="w-full">Error 404</Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
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
    </main>
  );
}