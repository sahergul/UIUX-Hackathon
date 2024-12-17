import Hero from "../components/Hero";
import About from "../components/About"
import FoodCata from "../components/FoodCata" 
import OurChefs from "./ourChefs/page";
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
