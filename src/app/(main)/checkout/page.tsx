"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Adjust the path to sanity.js file
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    city: "",
    zipCode: "",
    address1: "",
    address2: "",
  });

  const [billingAddress, setBillingAddress] = useState({
    sameAsShipping: false,
  });

  interface CartItem {
    name: string;
    price: number;
    quantity: number;
    image: string;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch cart items from local storage (or state management if used)
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setLoading(false);
  }, []);

  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingAddress({ sameAsShipping: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalBillingAddress = billingAddress.sameAsShipping ? shippingAddress : billingAddress;

    const order = {
      _type: "order",
      shippingAddress,
      billingAddress: finalBillingAddress,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: "pending",
    };

    try {
      await client.create(order);
      alert("Order placed successfully!");
      localStorage.removeItem("cartItems"); // Clear cart after successful order
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header heading="Checkout" subheading="Checkout" />
      <div className="container max-w-screen-lg mx-auto p-6 flex flex-col md:flex-row justify-between">
        <section>
          <form onSubmit={handleSubmit} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="firstName" placeholder="First name" value={shippingAddress.firstName} onChange={handleShippingChange} className="p-2 border rounded" required />
              <input type="text" name="lastName" placeholder="Last name" value={shippingAddress.lastName} onChange={handleShippingChange} className="p-2 border rounded" required />
              <input type="email" name="email" placeholder="Email address" value={shippingAddress.email} onChange={handleShippingChange} className="p-2 border rounded" required />
              <input type="tel" name="phone" placeholder="Phone number" value={shippingAddress.phone} onChange={handleShippingChange} className="p-2 border rounded" required />
            </div>
          </form>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Billing Address</h3>
            <label className="flex items-center">
              <input type="checkbox" name="sameAsShipping" checked={billingAddress.sameAsShipping} onChange={handleBillingChange} className="mr-2" />
              Same as shipping address
            </label>
          </div>

          <div className="flex justify-between">
            <button className="bg-gray-500 text-white px-4 py-2 rounded">&lt; Back to cart</button>
            <button type="submit" className="bg-orange-400 text-white px-4 py-2 rounded">Place an order &rarr;</button>
          </div>
        </section>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <ul className="space-y-2">
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="rounded" />
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price} (Quantity: {item.quantity})</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
          </ul>
          {cartItems.length > 0 && (
            <div className="mt-4">
              <p>Sub-total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
              <p>Shipping: Free</p>
              <p>Discount: 25%</p>
              <p>Tax: ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.25).toFixed(2)}</p>
              <p className="font-bold">Total: ${(cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) * 1.25).toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
