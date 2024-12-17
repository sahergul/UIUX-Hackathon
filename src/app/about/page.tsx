import Image from "next/image";
import Header from "@/components/Header";
import { IoPlayOutline } from "react-icons/io5";

export default function AboutUs() {
  return (
    <div>
      {/* First Section: Image and Breadcrumb */}
      <Header heading="About us" subheading="About" />

       <section className="text-black body-font bg-white py-4 md:py-24">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-evenly px-8 md:w-7/12 mx-auto gap-16 h-[734px] w-[1320px]">
        
          <div className="flex" >
            <div className="flex w-full flex-col items-center space-y-4">
              <Image
              className="object-cover w-[336px] h-[536px] md:w-[200px] md:h-[300px] rounded-lg"
              alt="Lemon"
              src="/lemon.png"
              height={536}
              width={336}
            />
            </div>
            <div className="flex-wrap justify-center pt-4">
              <Image
                className="object-cover w-[150px] h-[100px] md:w-[200px] md:h-[150px] rounded-lg py-2"
                alt="Yougurt"
                src="/yougurt.png"
                height={271}
                width={309}
                />
              <Image
                className="object-cover w-[150px] h-[100px] md:w-[200px] md:h-[150px] rounded-lg"
                alt="Pasta"
                src="/pasta.png"
                height={382}
                width={309}
                />
            </div>
          </div>
          {/* Left Text (takes 70% width on larger screens, full width on mobile) */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-[#FF9F0D] text-lg md:text-xl font-medium italic mb-4">
              About us _____
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-6">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed text-sm md:text-base text-black text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-x-4">
              <button className="inline-flex text-white bg-[#FF9F0D] border-0 py-4 px-6 focus:outline-none rounded text-base">
                Show More
              </button>
              <button className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white items-center bg-[#FF9F0D] text-2xl focus:outline-none rounded" />
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

       {/* Second Section */}
       <section className="text-white body-font">
        <div className="container mx-auto flex px-5 items-center justify-center flex-col w-[1320px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-1320px h-386px mt-1552px ml-300px mt-10"
            alt="thirdSection"
            src = "/thirdSection.png"
            width={1320} height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <section className="text-white body-font">
  <div className="container px-3 py-20 mx-auto w-[1320px]">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
          <Image
        
            src="/student.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            BEST CHEF
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
            </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=""
            src="/coffee.png"
            width={80} height={80}
            alt="blog"
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            120 Item food
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
          <Image
            className=" flex flex-col justify-center items-center"
            src="/man.png"
            width={80} height={80}
            alt="blog"
            
          />
          <div className="p-6">
            <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
            Clean Environment
            </h1>
            <p className="leading-relaxed mb-3 text-center text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  );
}