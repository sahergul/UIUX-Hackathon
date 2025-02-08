"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, applyCoupon, CartState } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { RootState } from "@/redux/store";
import { CartItem } from "@/redux/types";

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const coupon = useSelector((state:RootState) => state.cart.coupon);
  const dispatch = useDispatch();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>();


  useEffect(() => {
    setCartItems(cart as CartItem[]);
  }, [cart]);

  // Calculate subtotal
  
 
  const subTotal: number = cartItems?.reduce((acc: number, item: CartItem) => acc + item.price * item.quantity, 0) ?? 0;

  const discount = coupon ? subTotal * 0.1 : 0;
  const totalPrice = subTotal - discount;

  const handleAddToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const handleRemove = (id:string) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id:string, quantity:number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleApplyCoupon = () => {
    dispatch(applyCoupon("DISCOUNT10"));
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto">
      <Header heading="Shopping Cart" subheading="Cart"/>
      {(cartItems ?? []).length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {(cartItems ?? []).map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <h4 className="text-lg font-semibold">{item.name}</h4>
              </div>
              <div>
                <p className="text-gray-600">Price: ${item.price}</p>
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id.toString(), parseInt(e.target.value))}
                  className="w-16 p-2 border rounded"
                  min="1"
                />
                <p className="text-gray-600">Total: ${item.price * item.quantity}</p>
                <button onClick={() => handleRemove(item.id.toString())} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold mt-6">Coupon Code</h1>
              <input type="text" placeholder="Enter code here" className="w-50 p-2 border focus:outline-none" />
              <button onClick={handleApplyCoupon} className="mt-2 px-4 py-2 bg-orange-400 text-white rounded">Apply</button>
            </div>
            <div className="mt-6 p-4 border focus:outline-none w-70">
              <h1 className="text-lg font-bold">Total Bill</h1>
              <p className="border-t focus:outline-none my-2">Cart Subtotal: $ {subTotal.toFixed(2)}</p>
              <p>Discount: ${discount.toFixed(2)}</p>
              <p className="my-2 border-t-4"><strong>Total Amount: ${totalPrice.toFixed(2)}</strong></p>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between">
        <Link href="./shop">
          <button className="w-30 mt-4 px-4 py-2 bg-gray-500 text-white rounded">Continue shopping</button>
        </Link>
        <button onClick={handleCheckout} className="w-30 mt-4 px-4 py-2 mb-3 bg-orange-500 text-white rounded">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
