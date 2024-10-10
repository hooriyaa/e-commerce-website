import Image from "next/image";
import React from "react";
import image3 from "/public/images/pic1.png";
import image4 from "/public/images/BG Shapes.png";
import image5 from "/public/images/Feature.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col px-5  md:flex-row items-center justify-center bg-[#F0F2F3] w-[893px] sm:w-[1100px] ">
        <div className="lg:flex-grow flex-1 md:w-1/2 lg:pr-40  flex flex-col md:text-left mb-28 items-center text-center my-20 sm:my-0">
          <h1 className="title-font sm:ml-40 md:mr-44 mr-4 mb-1 font-normal whitespace-nowrap text-[#272343] text-[22px] sm:text-[18px] justify-center">
            Welcome to Chairy
          </h1>
          <p className="sm:mb-3 mb-5 leading-1 sm:text-4xl text-5xl font-bold font-[Inter] text-[#272343]">
            Best Furniture
            <br />
            Collection for your
            <br />
            Interior
          </p>
          <div className="sm:mr-40 whitespace-nowrap">
            <button className="inline-flex text-[#FFFFFF] bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#02a0aede] rounded text-lg">
              Shop Now
              <FaArrowRightLong className="text-[#FFFFFF] text-sm mt-2 ml-5" />
            </button>
          </div>
        </div>
        <div>
          <div className="relative w-[520px] h-[430px] mb-24">
            {/* Background shape image */}
            <Image
              src={image4}
              alt="Background Shape"
              className="z-0 object-contain"
            />

            {/* Chair image */}
            <Image
              src={image3}
              alt="Chair"
              width={380}
              height={430}
              className="absolute top-0 left-0 z-10 p-10 object-contain"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="flex justify-center">
        <div className=" pb-36">
          <div className="flex justify-center items-center">
            <Image
              src={image5}
              alt="features"
              width={600}
              height={600}
              className="w-[1100px] left-56 h-auto  absolute buttom-0 sm:left-24 z-10 px-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;