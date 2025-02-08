"use client"
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  apiVersion: '2025-01-17',
});

interface Chef {
  name: string;
  position: string;
  imageUrl: string;
}

const ChefGrid = () => {
  const [chefs, setChefs] = useState<Chef[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const query = `*[_type == "chef"] {
          name,
          position,
          "imageUrl": image.asset->url
        }`;
        const data = await client.fetch<Chef[]>(query);
        setChefs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchChefs();
  }, []);

  if (loading) {
    return <div>Loading chefs...</div>;
  }

  if (error) {
    return <div>Error fetching chefs: {error}</div>;
  }

  return (
    <div>
 {/* First Section: Image and Breadcrumb */}
      <Header heading="Our Chefs" subheading="Chef" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-8 max-w-screen-xl mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-4 border-purple-600"
                : "border-4 border-transparent hover:border-purple-600"
            }`}
          >
            <div className="flex-1">
              <Image
                src={chef.imageUrl}
                alt={chef.name}
                width={312}
                height={380}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;