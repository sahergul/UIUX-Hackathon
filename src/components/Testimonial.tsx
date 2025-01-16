import Image from "next/image"
import { GiRoundStar } from "react-icons/gi";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});


export default function Testimonial () {
    return (
<>
<section className="text-gray-600 body-font bg-black">
<div className="w-80% mx-20 text-white w-auto lg:w-[50%] mb-8 lg:mb-0">
          <h1 className={`${greatVibes.className} md:text-[32px] lg:text-[30px] text-[#FF9F0D]`}>
           Testimonial
          </h1>
          <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold md:whitespace-normal">
          What our client are saying 
          </h1>
          </div>
  <div className="container px-5 py-20 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-800px mx-auto text-center bg-white">
 <Image src="/pic17.png" alt= "image" height ={133} width ={133} className="inline-block scroll-mt-0"/>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-orange-300" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit debitis voluptatem, modi, quam error at nemo eligendi nisi minus inventore eaque. Molestiae iure, esse nostrum mollitia sunt quod saepe magni.</p>
      <div className="flex justify-center items-center my-3">
      <GiRoundStar className="text-orange-400" />
      <GiRoundStar className="text-orange-400" />
      <GiRoundStar className="text-orange-400" />
      <GiRoundStar className="text-orange-400" />
      <GiRoundStar className="text-gray-400"/>  
      </div>
 
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Alamin Hasan</h2>
      <p className="text-gray-500 mb-5">Food Specialist</p>
    </div>
  </div>
</section>
</>
    )}