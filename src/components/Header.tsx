import Image from "next/image";
import Navbar from "./Navbar";
<Navbar/>
export default function Header(props: { heading: string; subheading: string }) {
  const { heading, subheading } = props; // Destructuring the props
  return (
    <>
      {/* Main Div */}
      <div className="relative bg-white">
        {/* Background Image Section */}
        <div className="relative max-w-screen-2xl mx-auto">
          <Image
            src="/upper.png"
            alt="Header Background"
            width={1920}
            height={310}
            className="w-full object-cover h-[200px] md:h-[300px]"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-xl md:text-4xl font-bold">
              {heading}
            </h1>
            <h5 className="py-2 md:py-3 text-sm md:text-base lg:text-lg">
              Home &gt;
              <span className="text-[#FF9F0D]"> {subheading}</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
