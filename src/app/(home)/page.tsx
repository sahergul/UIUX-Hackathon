import Hero from "@/components/Hero";
import About from "@/components/About"
import FoodCata from "@/components/FoodCata" 
import Experience from "@/components/Experience";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogPost from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ChooseFromMenu from "@/components/Choose Menu";
import OurChefs from "@/components/HomeChef";


export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
    <Hero/>
    <About/>
    <FoodCata/>
    <WhyChooseUs/>
    <Experience/>
    <ChooseFromMenu/>
    <OurChefs/>
    <Testimonial />
    <BlogPost />
      </div>
  );
}
