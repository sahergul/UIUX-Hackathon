import Link from "next/link";
import React from "react";
import { FaApple } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import { GoPerson, GoMail, GoLock } from "react-icons/go";


export default function SignUpPage() {
  return (
    <>
   
      <div className="min-h-screen bg-white">  
      {/* Signup Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
          <form>
            <div className="relative mb-4">
            <GoPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder= "Name.."
              />
            </div>
            <div className="relative mb-4">
            <GoMail className="absolute left-3 top-1/2 transform -translate-y-1/2 "/>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Email"
              />
            </div>
            <div className="relative mb-4">
            <GoLock className="absolute left-3 top-1/2 transform -translate-y-1/2 "/>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center mb-4 relative">
              <Input type="checkbox" className="w-5 bg-[#FF9F0D] mr-3" />
              <span className="text-slate-700">Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF9F0D] hover:bg-yellow-800 text-white  py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-right mt-4 text-slate-400 ">
              <Link href="/forgot-password">Forgot password?</Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-evenly">
            <FcGoogle />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-evenly">
            <FaApple />
              Sign up with Apple
            </button>
          </div>
        </div>
      </section>
    </div>
 </>
  );
}