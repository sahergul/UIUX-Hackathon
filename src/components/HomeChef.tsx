"use client"; // Mark this component as a Client Component

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Use NEXT_PUBLIC_ prefix for client-side env vars
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: '2025-01-17',
});

const OurChefs = () => {
  const [chefs, setChefs] = useState<any[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      const query = `*[_type == "chef"][0..3] {
        _id,
        name,
        position,
        experience,
        "imageUrl": image.asset->url,
        description,
      }`;

      const chefs = await client.fetch(query);
      setChefs(chefs);
    };

    fetchChefs();
  }, []);

  return (
    <div>
      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${greatVibes.className} whitespace-nowrap md:text-4xl text-[#FF9F0D]`}>
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[40px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          {chefs.map((chef: any) => (
            <div key={chef._id} className="flex flex-col items-center">
              <Image 
                src={chef.imageUrl} 
                alt={chef.name} 
                height={391} 
                width={312} 
                className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"
              />
              <h2 className="text-white text-xl font-bold mt-4">{chef.name}</h2>
              <p className="text-white text-sm text-center mt-2">{chef.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href='./ourChefs'>
            <Button 
              className={`
                px-8 py-3 
                rounded-full 
                border-2 
                border-[#FF9F0D] 
                text-white 
                text-lg 
                transition-all 
                duration-300 
                hover:bg-[#FF9F0D] 
                hover:text-black 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#FF9F0D] 
                focus:ring-opacity-50
              `}
            >
              See More
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OurChefs;