"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

const RightSidebar = () => {
  return (
    <div className="w-[424px] mt-[8px] h-auto">
      {/* Search Section */}
      <div className="flex justify-center mt-5 w-[421.82px] border-1 h-[70px]">
        <input
          placeholder="Search Your Keyword"
          type="text"
          className="w-[350px] px-3 py-3 bg-zinc-100 border-lg border-gray-300"
        />
        <Button className="w-[76px] h-[69px] cursor-pointer justify-center bg-[#FF9F0D]">
          <Image
            src="/search.png"
            alt=""
            width={24}
            height={24}
            className="ml-6"
          />
        </Button>
      </div>

      {/* Chef Image */}
      <Image
        src="/chef.png"
        alt=""
        width={424}
        height={423}
        className="mt-5"
      />

      {/* Recent Posts */}
      <div className="justify-center mt-5 w-[423px] h-auto border-[1px] border-gray-400">
        <h1 className="text-lg w-[200px] font-bold h-[28px] py-5 px-8">
          Recent Posts
        </h1>
        {["/post1.png", "/post2.png", "/post3.png", "/post4.png"].map(
          (post, index) => (
            <Image
              key={index}
              src={post}
              alt={`Post ${index + 1}`}
              width={323}
              height={107}
              className="ml-8 mt-5 cursor-pointer"
            />
          )
        )}
      </div>

      {/* Filter by Menu */}
      <div className="justify-center mt-5 w-[423px] h-auto border-[1px] border-gray-400">
        <h1 className="text-lg w-[200px] h-[28p] py-2 px-8 font-bold">
          Filter By Menu
        </h1>
        {[
          "/chicken1.png",
          "/chicken2.png",
          "/chicken3.png",
          "/chicken4.png",
          "/chicken5.png",
        ].map((menu, index) => (
          <Image
            key={index}
            src={menu}
            alt={`Menu ${index + 1}`}
            width={323}
            height={62}
            className="ml-8 mt-3 cursor-pointer"
          />
        ))}
      </div>

      {/* Advertisement */}
      <div className="w-[423px] mt-5 h-[308px] border-[1px] border-gray-400">
        <div className="w-[325px] h-[244px] py-8 ml-10 cursor-pointer">
          <Image
            src="/component.png"
            alt="Advertisement"
            width={325}
            height={244}
          />
        </div>
      </div>

      {/* Instagram Images */}
      <div className="w-[422px] mt-5 border-[1px] border-[#E0E0E0] h-[316px]">
        <div className="w-[362px] mt-7 ml-5 h-[252px]">
          <div className="flex w-[362px] h-[126px]">
            {["/mask1.png", "/mask3.png", "/mask4.png"].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Instagram Image ${index + 1}`}
                width={110}
                height={92}
                className="ml-2 cursor-pointer"
              />
            ))}
          </div>
          <div className="flex mt-5 w-[362px] h-[126px]">
            {["/mask2.png", "/mask5.png", "/mask6.png"].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Instagram Image ${index + 4}`}
                width={110}
                height={92}
                className="ml-2 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Follow Us */}
      <div className="mt-4 border-[1px] w-[422px] h-[150px] items-center mb-2">
        <div className="w-[308px] mt-[20px] ml-10 h-[94px] items-center cursor-pointer">
          <h1 className="text-2xl font-bold">Follow us</h1>
          <Image
            src="/icon.png"
            alt="Social Media Icons"
            width={308}
            height={46.5}
            className="mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
