import Hero from "@/components/Hero";
import About from "@/components/About"
import FoodCata from "@/components/FoodCata" 
import OurChefs from "./ourChefs/page";
import Experience from "@/components/Experience";
import WhyChooseUs from "@/components/WhyChooseUs";
import BlogPost from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import SignUpPage from "./signup/page";
import FAQPage from "./faq/Page";
import ShoppingCart from "./cart/page";




export default function Home() {
  return (
   
   <div className="max-w-screen-2xl mx-auto">
    <Hero/>
    <About/>
    <FoodCata/>
    <WhyChooseUs/>
    <Experience/>
    <OurChefs/>
    <Testimonial />
    <BlogPost />
    <SignUpPage />
    <FAQPage />
    <ShoppingCart />
    </div>
  );
}
