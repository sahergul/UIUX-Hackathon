import Image from "next/image"
import React from 'react'
import Hero from "./hero"
import ChefGrid from "./chefgrid"


const OurChefs = () => {
  return (
    <div>
       <section className="bg-black md:px-[135px] py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="font-greatVibes text-4xl md:text-[32px] text-[24px] text-[#FF9F0D]">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src="/chef1.png" alt="chef" height={391} width={312} className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src="/chef4.png" alt="chef" height={391} width={312} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chef3.png" alt="chef" height={391} width={312} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src="/chef2.png" alt="chef" height={391} width={312} className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </div>
  )
}

export default OurChefs