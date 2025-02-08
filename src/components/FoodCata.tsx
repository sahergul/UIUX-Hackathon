import React from 'react';
import Image from 'next/image';
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const items = [
  { id: 1, Image: "/f1.png", label: "Save 50%" },
  { id: 2, Image: "/burger3.png", label: "Delicious Burgers" },
  { id: 3, Image: "/f3.png", label: "Healthy Salads" },
  { id: 4, Image: "/f4.png", label: "Desserts" },
];

const FoodCatagory = () => {
  return (
    <section className="bg-black text-white py-16 px-20">
      <div className="container mx-auto text-center">
      <h2 className={`${greatVibes.className} whitespace-nowrap text-[#FF9F0D] text-[20px] md:text-[28px] lg:text-[32px] text-center`}>
      Food Catagory</h2>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <div
                className="relative w-full max-w-full h-auto"
                style={{
                  borderRadius: '6px 0px 0px 0px',
                  overflow: 'hidden', // Prevents overflow of images
                  opacity: 1, // Ensures visibility
                }}
              >
                <Image
                  src={item.Image} // Correct path to images
                  alt={item.label}
                  className="object-cover rounded-lg"
                  width={500} // Adjust width for responsiveness
                  height={300} // Adjust height for responsiveness
                />
              </div>

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-[#FF9F0D] font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCatagory;
