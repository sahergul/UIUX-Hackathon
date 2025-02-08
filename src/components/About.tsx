import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

function AboutUs() {
  return (
    <section className="bg-black px-3 md:px-[40px] lg:px-[80px] py-40px]">
      {/* Heading and Images Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-evenly">

        {/* Text Section */}
        <div className="text-white md:w-[40%] mb-8 lg:mb-0">
          <h1 className={`${greatVibes.className} md:text-[32px] lg:text-[40px] text-[#FF9F0D]`}>
            About us
          </h1>
          <h1 className=" text-[20px] md:text-[30px] lg:text-[40px] font-bold md:whitespace-normal">
            <span className="text-[#FF9F0D]">We</span> Create the best foody product
          </h1>
          <p className="text-[12px] md:text-[16px] lg:text-[18px] font-normal mt-4 text-justify w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <ul className="mt-6">
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Quisque diam pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="text-[12px] md:text-[16px] lg:text-[18px] font-normal flex items-center mt-4">
              <FaCheck className="mr-2" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center md:items-start">
            <Link href="./about"><button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
              See More
            </button></Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col  lg:w-[40%] justify-center items-center mt-10">
          {/* First Image (Responsive) */}
          <div className="relative w-full sm:w-[320px] md:w-[400px] lg:w-[550px]  h-[250px] mb-2 lg:mb-0">
            <Image
              src="/About1.png"
              alt="About Image 1"
              className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
              width={660}
              height={330}
            />
          </div>

          {/* Two Images in Row */}
          <div className="flex flex-col md:flex-row gap-5 lg:flex-row mt-[16px] lg:mt-[45px] w-full justify-between">
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto] mb-2 md:mb-0">
              <Image
                src="/About2.png"
                alt="About Image 2"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                width={322}
                height={194}
              />
            </div>
            <div className="relative w-full sm:w-[300px] md:w-[322px] lg:w-[322px] xl:w-[350px] h-[auto]">
              <Image
                src="/About3.png"
                alt="About Image"
                className="object-cover rounded-[6px_0px_0px_0px] opacity-100"
                width={322}
                height={194}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
