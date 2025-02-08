import React from "react";
import Link from "next/link";
import Image from "next/image";
import { LuThumbsUp, LuMessageSquareMore, LuShare2 } from "react-icons/lu";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

    const BlogPost: React.FC = () => {
    return (
    <>
      <section className="text-white body-font bg-black max-w-screen-2xl mx-auto">
      <div className="flex flex-col justify-center items-center">
      <h2 className={`${greatVibes.className} text-4xl md:text-[32px] text-[24px] text-[#FF9F0D]`}>
      Blog Post
        </h2>
        <h1 className="text-[20px] md:text-[40px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">La</span>test News & Blog
        </h1>
        </div>
        <div className="container px-8 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 bg-red">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image src="/burger3.png" alt="burger" width={423} height={349} className= "lg:h-[349px] w-full object-cover object-center"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-base text-[#FF9F0D] mb-3">10 February 2022</h2>
                  <h2 className="title-font text-lg font-medium mb-7">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>
                  <div className="flex justify-between items-center flex-wrap ">
                    <a className="text-white text-sm inline-flex items-center md:mb-2">Learn More</a>
                    <span className="flex gap-4">
                    <LuThumbsUp />
                    <LuMessageSquareMore className="text-[#FF9F0D]" />
                    <LuShare2 />
                    </span>
                    </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image src="/blogdetails2.png" alt="burger" width={423} height={349} className= "lg:h-[349px] w-full object-cover object-center"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-base text-[#FF9F0D] mb-3">10 February 2022</h2>
                  <h2 className="title-font text-lg font-medium mb-7">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>
                  <div className="flex justify-between items-center flex-wrap ">
                    <a className="text-white text-sm inline-flex items-center md:mb-2">Learn More</a>
                    <span className="flex gap-4">
                    <LuThumbsUp />
                    <LuMessageSquareMore className="text-[#FF9F0D]" />
                    <LuShare2 />
                    </span>
                    </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image src="/lemon.png" alt="burger" width={423} height={349} className= "lg:h-[349px] w-full object-cover object-center"/>
                <div className="p-6">
                  <h2 className="tracking-widest text-sm title-font font-base text-[#FF9F0D] mb-3">10 February 2022</h2>
                  <h2 className="title-font text-lg font-medium mb-7">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h2>
                  <div className="flex justify-between items-center flex-wrap ">
                    <a className="text-white text-sm inline-flex items-center md:mb-2">Learn More</a>
                    <span className="flex gap-4">
                    <LuThumbsUp />
                    <LuMessageSquareMore className="text-[#FF9F0D]" />
                    <LuShare2 />
                    </span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>    
      );
  }

  export default BlogPost;
