"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "@/redux/types";
import Header from "@/components/Header";


const CheckoutPage = () => {
  // Fetch cart data from Redux
  const cartItems: CartItem[] = useSelector((state: RootState) => state.cart.items);

  console.log("Cart Data in Checkout Page:", cartItems); // Debugging

  // Calculate subtotal
  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const coupon = useSelector((state: RootState) => state.cart.coupon);
  const discount = coupon ? subTotal * 0.1 : 0;
  const totalPrice = subTotal - discount;

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

  return (
    <div className="container mx-auto">
      <Header heading="Checkout Page" subheading="CheckOut"/>
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

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <h4 className="text-lg font-semibold">{item.name}</h4>
              </div>
              <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
            </div>
          ))}
          <div className="mt-6 p-4 border focus:outline-none w-70">
            <h1 className="text-lg font-bold">Total Bill</h1>
            <p>Cart Subtotal: ${subTotal.toFixed(2)}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p className="border-t-4"><strong>Total Amount: ${totalPrice.toFixed(2)}</strong></p>
          </div>
        </div>
      )}
    </div>
    </div>);
};
}
export default CheckoutPage;
