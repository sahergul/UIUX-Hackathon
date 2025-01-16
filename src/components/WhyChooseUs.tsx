import Image from "next/image";
import { PiHamburgerLight, PiWineLight, PiCookie } from "react-icons/pi";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400"
});

export default function WhyChooseUs() {
  return (
    <>
      {/* First Section: Image and Breadcrumb */}
      <section className="text-white body-font bg-black py-6 gap-10">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-evenly px-8 md:w-10/12 mx-auto gap-20 md:gap-10 h-auto">
        
          {/* Image Section */}
          <div className="flex flex-col space-y-4 mr-20">
            <div className="flex justify-center gap-2 md:gap-4 space-y-8 ml-2">
              <Image
                className="object-cover w-full md:w-[300px] h-auto md:h-[350px] rounded-lg"
                alt="Lemon"
                src="/lemon.png"
                height={356}
                width={362}
              />
              <Image
                className="object-cover w-full md:w-[200px] h-auto md:h-[230px] rounded-lg md:mt-20"
                alt="burger"
                src="/burger3.png"
                height={231}
                width={281}
              />
            </div>
            <div className="flex flex-wrap justify-center md:flex-nowrap gap-4 md:gap-4">
              <Image
                className="object-cover w-full md:w-[200px] h-auto md:h-[150px] rounded-lg"
                alt="Yougurt"
                src="/yougurt.png"
                height={306}
                width={244}
              />
              <Image
                className="object-cover w-full md:w-[200px] h-auto md:h-[200px] rounded-lg"
                alt="burger"
                src="/mainCourse.png"
                height={226}
                width={221}
              />
              <Image
                className="object-cover w-full md:w-[100px] h-auto md:h-[160px] rounded-lg"
                alt="Pasta"
                src="/pasta.png"
                height={166}
                width={161}
              />
              <Image
                className="object-cover w-full md:w-[100px] h-auto md:h-[160px] rounded-lg"
                alt="Pasta"
                src="/pic15.png"
                height={168}
                width={161}
              />
            </div>
          </div>
          
          {/* Left Text Section */}
          <div className="w-full md:w-6/12 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <h1 className={`${greatVibes.className} whitespace-nowrap text-[#FF9F0D] text-lg md:text-3xl mb-4`}>
              Why Choose us
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste and Experienced
            </p>
            <p className="mb-8 leading-relaxed text-sm md:text-base text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            
            {/* Icons and Text */}
            <div className="flex justify-between items-center flex-col md:flex-row text-6xl space-y-4 md:space-x-8 mb-4 text-white">
              <div className="flex-col text-center">
                <PiHamburgerLight className="bg-[#FF9F0D] p-2 rounded-full" />
                <p className="text-base my-2">Fast Food</p>
              </div>
              <div className="flex-col text-center">
                <PiCookie className="bg-[#FF9F0D] p-2 rounded-full" />
                <p className="text-base my-2">Lunch</p>
              </div>
              <div className="flex-col text-center">
                <PiWineLight className="bg-[#FF9F0D] p-2 rounded-full" />
                <p className="text-base my-2">Dinner</p>
              </div>
            </div>

            <Image src="/pic16.png" alt="pic" height={93} width={374} />
          </div>
        </div>
      </section>
    </>
  );
}
