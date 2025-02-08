import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPinterest } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiLineVerticalLight } from "react-icons/pi";
import { Great_Vibes } from "next/font/google";


const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});


export default function Hero () {
  return (
    <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
     <div className="flex-col justify-evenly text-white space-y-5">
        <PiLineVerticalLight className="text-8xl" />
        <FaFacebookF className="ml-10" />
           <FaTwitter className="ml-10 text-[#FF9F0D]"/>
           <FaPinterest className="ml-10"/>
           <PiLineVerticalLight className="text-8xl" />
        </div>
         {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h2 className={`${greatVibes.className} text-[#FF9F0D] text-[20px] md:text-[28px] lg:text-[32px]  whitespace-nowrap text-center md:text-left`}>
          Its Quick & Amusing!
        </h2>

        <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
<Link href="./shop">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
            See More
          </button></Link>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[30px] md:mt-0 md:w-[50%] flex justify-center">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={877}
          height={670}
          className="w-[90%] md:w-auto max-w-[300px] md:max-w-full"
        />
      </div>
  </section>
  );
}

