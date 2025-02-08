"use client";
import Link from "next/link";
import { useParams } from "next/navigation"; // Import useParams
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from "@/redux/cartSlice"; // Import addToCart action

// Define the type for the food item
type FoodItem = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  imageUrl: string;
  rating: string;
  available: boolean;
};

const ShopDetailsPage = () => {
  const Params = useParams();
  const { id } = Params; // Extract the ID from the URL
  const [item, setItem] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Initialize useDispatch

  // Fetch item details from Sanity
  useEffect(() => {
    if (id) {
      const fetchItem = async () => {
        const query = `*[_type == "food" && _id == $id][0]{
          _id,
          name,
          category,
          price,
          originalPrice,
          description,
          "imageUrl": image.asset->url,
          rating,
          available
        }`;
        try {
          const data = await client.fetch(query, { id });
          setItem(data);
        } catch (error) {
          console.error("Failed to fetch item details:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchItem();
    }
  }, [id]);

  // Handle quantity increase
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Handle quantity decrease
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle add to cart
  const handleAddToCart = (item: FoodItem) => {
    const itemWithQuantity = {
      id: item._id, // Use _id as the unique identifier
      name: item.name,
      price: item.price,
      quantity, // Include the selected quantity
      image: item.imageUrl, // Map imageUrl to image
    };
    dispatch(addToCart(itemWithQuantity)); // Dispatch addToCart action
    alert(`${item.name} added to cart!`);
  };

  // Handle add to wishlist
  const addToWishlist = (item: FoodItem) => {
    // Add logic to handle wishlist functionality
    alert(`${item.name} added to wishlist!`);
  };

  if (loading) {
    return <div className="text-center py-10">Loading item details...</div>;
  }

  if (!item) {
    return <div className="text-center py-10">Item not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Item Details */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Item Image */}
        <div className="relative w-full h-96 md:h-auto">
          <Image
            src={item.imageUrl}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Item Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
          <p className="text-gray-600 mb-4">{item.description}</p>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold">${item.price}</span>
            {item.originalPrice && (
              <span className="text-gray-500 line-through">
                ${item.originalPrice}
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">
            Category: <span className="font-semibold">{item.category}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Rating: <span className="font-semibold">{item.rating}</span>
          </p>
          <p className="text-gray-600 mb-4">
            Availability:{" "}
            <span className={item.available ? "text-green-600" : "text-red-600"}>
              {item.available ? "In Stock" : "Out of Stock"}
            </span>
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={handleDecreaseQuantity}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-4 py-2">{quantity}</span>
              <button
                onClick={handleIncreaseQuantity}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <Link href="../cart">
              <button
                onClick={() => handleAddToCart(item)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                disabled={!item.available}
              >
                Add to Cart
              </button>
            </Link>
          </div>

          {/* Wishlist and Compare */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => addToWishlist(item)}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600"
            >
              <span>Add to Wishlist</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
              <span>Compare</span>
            </button>
          </div>

          {/* Tags and Share */}
          <div className="mb-6">
            <p className="text-gray-600 mb-2">
              Tags: <span className="font-semibold">Our Shop</span>
            </p>
            <div className="flex gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Pizza
              </span>
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                Burger
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Reviews (0)</h2>
        <p className="text-gray-600">
          No reviews yet. Be the first to review this product!
        </p>
      </div>

      {/* Key Benefits Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Mauris ultrices consequat massa et ut massa mattis volutpat.</li>
          <li>Vestibulum sed massa vel ipsum imperdiet malesuada.</li>
        </ul>
      </div>

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Example Related Products */}
          <div className="border rounded-lg p-4">
            <Image
              src="/chicken1.png"
              alt="Related Product"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Fresh Line</h3>
            <p className="text-gray-600">$8.00</p>
          </div>
          <div className="border rounded-lg p-4">
            <Image
              src="/chicken2.png"
              alt="Related Product"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Chocolate Muffin</h3>
            <p className="text-gray-600">$4.00</p>
          </div>
          <div className="border rounded-lg p-4">
            <Image
              src="/chicken3.png"
              alt="Related Product"
              width={200}
              height={200}
              className="w-full h-auto"
            />
            <h3 className="text-lg font-semibold mt-2">Burger</h3>
            <p className="text-gray-600">$33.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;