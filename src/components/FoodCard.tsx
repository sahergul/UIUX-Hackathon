import Image from "next/image";
import React from "react";

interface FoodItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative h-48">
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={300}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h2>
        <p className="text-gray-600">{item.category}</p>
        <p className="text-green-600 font-semibold">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodCard;