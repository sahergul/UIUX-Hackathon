import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import { IoPlayOutline } from "react-icons/io5";
import Testimonial from "@/components/Testimonial";

export default function AboutUs() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <Header heading="About us" subheading="About" />

      <section className="text-black body-font bg-white py-4 md:py-20">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 md:px-8  py-8 mx-auto md:gap-4 max-w-[1320px]">
          {/* Image Section */}
          <div className="flex flex-col items-center md:flex-row md:items-start gap-4 md:gap-2 w-full md:w-6/12">
            <div className="flex flex-col items-center space-y-5">
              <Image
                className="object-cover rounded-lg ml-8"
                alt="Lemon"
                src="/lemon.png"
                height={536}
                width={336}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-12 mr-20">
              <Image
                className="object-cover rounded-lg"
                alt="Yogurt"
                src="/yougurt.png"
                height={150}
                width={200}
              />
              <Image
                className="object-cover rounded-lg"
                alt="Pasta"
                src="/pasta.png"
                height={150}
                width={200}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full md:w-4/12 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-[#FF9F0D] text-lg md:text-xl font-medium italic mb-4">
              About us _____
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed text-sm md:text-base text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4">
              <button className="inline-flex text-white bg-[#FF9F0D] py-3 px-6 rounded">
                Show More
              </button>
              <button className="flex items-center gap-2 bg-[#FF9F0D] text-white py-3 px-6 rounded">
                <IoPlayOutline className="text-xl" />
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section className="text-black body-font">
        <div className="container mx-auto flex flex-col items-center text-center px-6 py-12 max-w-[1320px]">
          <h1 className="text-3xl font-bold">Why Choose Us</h1>
          <p className="mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <Image
            className="mt-10 rounded-lg"
            alt="thirdSection"
            src="/thirdSection.png"
            width={1200}
            height={400}
          />
        </div>
      </section>

      {/* Third Section */}
      <section className="text-black body-font">
        <div className="container px-6 py-20 mx-auto max-w-[1320px]">
          <div className="flex flex-wrap -m-4">
            {[
              { src: "/student.png", title: "BEST CHEF" },
              { src: "/coffee.png", title: "120 Item Food" },
              { src: "/man.png", title: "Clean Environment" },
            ].map((item, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 flex flex-col items-center rounded-lg p-6">
                  <Image src={item.src} width={80} height={80} alt={item.title} />
                  <h1 className="title-font text-lg font-bold mt-4 mb-2">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat.
                  </p>
                </div>
              </div>
            ))}
            <Testimonial/>
          </div>
        </div>
      </section>
    </div>
  );
}
