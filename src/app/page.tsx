import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About"
import FoodCata from "../components/FoodCata" 
import Faq from "./faq/Page";
import ShoppingCart from "./cart/page";
import MenuPage from "./menu/page";
import PartnerClient from "@/components/PartnerClient";
import OurChefs from "./ourChefs/page";
import Blog from "./blog/page";
import Experience from "@/components/Experience";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogPost from "@/components/Blog";


export default function Home() {
  return (
   
   <>
    <Hero/>
    <About/>
    <FoodCata/>
    <WhyChooseUs/>
    <Experience/>
    <OurChefs/>
    <BlogPost/>
   </>
  );
}
