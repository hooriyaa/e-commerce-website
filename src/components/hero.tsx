import Image from "next/image";
import React from "react";
import image3 from "/public/images/pic1.png";
import image4 from "/public/images/BG Shapes.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col px-5  sm:flex-row items-center justify-center bg-[#F0F2F3] w-[893px] sm:w-[1100px] ">
        <div className="lg:flex-grow flex-1 md:w-1/2 lg:pr-40 sm:pl-10  flex flex-col md:text-left mb-28 items-center text-center mt-24 sm:my-0">
          <h1 className="title-font md:mr-44 mr-4 mb-2 font-normal whitespace-nowrap text-[#272343]  text-[22px] md:text-[20px] justify-center">
            Welcome to Chairy
          </h1>
          <p className="title-font sm:ml-36 md:mr-44 mr-4 whitespace-nowrap text-[#272343]  sm:text-[35px]  sm:mb-3 mb-5 leading-1 sm:text-4xl text-5xl font-bold font-[Inter] justify-center">
            Best Furniture
            <br />
            Collection for your
            <br />
            Interior
          </p>
          <div className="sm:mr-[147px] md:mr-[173px] whitespace-nowrap">
            <button className="inline-flex text-[#FFFFFF] bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#02a0aede] rounded text-xl">
              Shop Now
              <FaArrowRightLong className="text-[#FFFFFF] text-sm mt-2 ml-5" />
            </button>
          </div>
        </div>
        <div>
          <div className="relative h-[460px] mb-24">
            {/* Background shape image */}
            <Image
              src={image4}
              alt="Background Shape"
              className="z-0 object-contain h-[500px] sm:h-auto"
            />

            {/* Chair image */}
            <Image
              src={image3}
              alt="Chair"
              width={380}
              height={430}
              className="absolute top-0 left-0 z-10 p-10 ml-40 sm:ml-2   sm:mr-24   object-contain object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
