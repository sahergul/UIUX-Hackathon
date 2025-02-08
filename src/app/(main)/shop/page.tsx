"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import { Pagination, PaginationLink } from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import SelectDemo from "@/components/Select";
import SearchBar from "@/components/SearchBar"; // Import the SearchBar component
import { client } from "@/sanity/lib/client";
import FoodCard from "@/components/FoodCard";

// Define the type for the food data from Sanity
type FoodItem = {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string; 
};

const Shop = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("all"); // Default sort by "all"
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Fetch food items from Sanity
  useEffect(() => {
    const fetchFoodItems = async () => {
      const query = `*[_type == "food"]{
        _id,
        name,
        category,
        price,
        "imageUrl": image.asset->url
      }`;
      try {
        const data = await client.fetch(query);
        setFoodItems(data);
      } catch (error) {
        console.error("Failed to fetch food items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoodItems();
  }, []);

  // Sample categories (you can fetch these from Sanity as well)
  const categories = [
    "Sandwich",
    "Pizza",
    "Burger",
    "Drink",
    "Dessert",
    "Chicken Chup",
    "Salad",
    "Choclate Muffin",
  ];

  // Handle category selection
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category) // Remove category if already selected
        : [...prev, category] // Add category if not selected
    );
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Handle search query change
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page when search query changes
  };

  // Filter food items based on search query and selected categories
  const filteredItems = foodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);
    return matchesSearch && matchesCategory;
  });

  // Sort filtered items
  const sortedItems = [...filteredItems]; // Create a copy of filtered items
  if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name)); // Sort by name
  } else if (sortBy === "price") {
    sortedItems.sort((a, b) => a.price - b.price); // Sort by price
  }
  // If sortBy is "all", no sorting is applied

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Show loading state while data is being fetched
  if (loading) {
    return <div className="text-center py-10">Loading foods...</div>;
  }

  return (
    <>
    {/* First Section: Image and Breadcrumb */}
    <Header heading="Our Shop" subheading="Shop" />
    <div className="container mx-auto px-4 py-2 md:pt-5 flex flex-wrap lg:flex-nowrap">
      {/* Left Content */}
      <div className="w-full lg:w-2/3 lg:mr-10">
        {/* Sort and Show Options */}
        <div className="flex gap-5 ml-14 mb-6">
          <span>Sort By:</span>
          <SelectDemo
            options={[
              { value: "all", label: "All" }, // Default option
              { value: "name", label: "Name" },
              { value: "price", label: "Price" },
            ]}
            onSelect={(value: string) => setSortBy(value)}
          />
        </div>

        {/* Food List */}
        <div className="space-y-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentItems.map((item) => (
            <Link key={item._id} href={`/shop/${item._id}`}> {/* Wrap FoodCard with Link */}
              <a>
                <FoodCard item={item} />
              </a>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <Pagination className="mt-6">
          {Array.from({ length: Math.ceil(sortedItems.length / itemsPerPage) }, (_, i) => (
            <PaginationLink
              key={i + 1}
              onClick={() => paginate(i + 1)}
              isActive={currentPage === i + 1}
            >
              {i + 1}
            </PaginationLink>
          ))}
        </Pagination>
      </div>

      {/* Right Sidebar */}
      <div className="w-full lg:w-1/6 mt-10 lg:mt-0">
        {/* Search Bar */}
        <SearchBar onSearch={handleSearchChange} />

        {/* Category Filter */}
        <div className="border rounded-lg mt-8 p-6 space-y-2 text-base">
          <h1 className="text-lg font-bold mb-4">Category</h1>
          {categories.map((category, index) => (
            <div key={index} className="flex gap-4 items-center">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <span>{category}</span>
            </div>
          ))}
        </div>

        {/* Latest Products */}
        <div className="bg-white border rounded-lg mt-8 p-6">
          <h1 className="text-lg font-bold mb-4">Latest Products</h1>
          {[...Array(5)].map((_, index) => (
            <Image
              key={index}
              src={`/chicken${index + 1}.png`}
              alt=""
              width={311}
              height={62}
              className="w-full h-auto cursor-pointer mb-4"
            />
          ))}
        </div>

        {/* Product Tags */}
        <div className="bg-white border rounded-lg mt-8 p-6">
          <h1 className="font-bold text-xl mb-4">Product Tags</h1>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Services
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Our Menu
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Pizza
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Cupcake
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Burger
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Cookies
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Our Shop
            </span>
            <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
              Tandoori Chicken
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;