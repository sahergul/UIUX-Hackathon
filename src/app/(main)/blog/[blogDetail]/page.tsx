"use client";
import Image from "next/image";
import Header from "@/components/Header";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import CommentSection from "@/components/Comment";
import RightSidebar from "@/components/RightSidebar";

const BlogDetails = ({ params }: { params: { blogDetail: string } }) => {
  return (
    <>
      <Header heading="Home" subheading="Blog details" />

      {/* Main Layout */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-8 mt-10">
        {/* Left Content */}
        <div className="flex-1 text-gray-700">
          {/* Blog Image */}
          <Image
            className="rounded-lg h-[500px] mt-5"
            src="/yougurt.png"
            alt="Digital Detox Challenge"
            width={872}
            height={420}
          />

          {/* Metadata */}
          <div className="flex gap-4 mt-4 items-center">
            <Image src="/Calendar.png" alt="Calendar" width={24} height={24} />
            <Image src="/Admin.png" alt="Admin" width={267} height={24} />
          </div>

          {/* Blog Title */}
          <h1 className="font-bold text-xl lg:text-2xl py-6 text-gray-800">
            10 Reasons To Do A Digital Detox Challenge
          </h1>

          {/* Blog Content */}
          <p className="leading-relaxed mb-6 text-sm lg:text-base">
            Netus pretium tellus nulla commodo massa adipiscing in elementum magna congue condimentum placerat habitasse potenti ac orci a quisque tristique elementum et viverra at condimentum scelerisque eu mi.
          </p>
          <p className="leading-relaxed mb-6 text-sm lg:text-base">
            Ac haca ullamcorper donec ante habi tasse donec imperdiet eturpis varius per a augue magna hac.
          </p>

          {/* Highlight Section */}
          <div className="bg-yellow-500 p-6 rounded-lg text-white font-bold text-base lg:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          {/* Additional Content */}
          <p className="leading-relaxed mb-6 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>

          {/* Paragraph + Image Section */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-8">
            {/* Paragraph Section */}
            <div className="lg:w-1/2 text-sm lg:text-base">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim, sit architecto repellat sequi eos delectus a accusamus magnam alias molestias magni minus ratione voluptates libero, dolores eligendi, velit numquam.</p>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2">
              <Image src="/pic2.png" alt="Blog Image" width={424} height={366} className="rounded-lg h-[300px]" />
            </div>
          </div>

          <p className="mt-5 text-sm lg:text-base">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
          </p>

          {/* Tags and Share Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-300 py-5 mt-8">
            <div className="flex items-center gap-2">
              <h1 className="font-bold">Tags:</h1>
              <span>Restaurant, Dinner, Pizza, Yummy</span>
            </div>
            <div className="flex items-center gap-3 mt-4 lg:mt-0">
              <h1 className="font-bold">Share:</h1>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>

          {/* Comment Section */}
          <h1 className="text-xl lg:text-2xl font-bold mb-6">Comments - 03</h1>
          <CommentSection />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </>
  );
};

export default BlogDetails;
