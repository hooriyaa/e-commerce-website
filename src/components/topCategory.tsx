import React from "react";
import product1 from "/public/images/product9.png";
import product2 from "/public/images/product5.png";
import product3 from "/public/images/product6.png";
import product4 from "/public/images/product7.png";
import product5 from "/public/images/product8.png";
import Image from "next/image";

const TopCategory = () => {
  return (
    <div className="w-[500px] sm:w-auto mx-64  sm:mx-0">
      <section className="text-gray-600 sm:left-0 sm:ml-0 mt-14">
        <h1 className=" text-base md:text-xl lg:text-2xl font-semibold font-[Inter] ml-32  p-6">
          Top categories
        </h1>
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap justify-center items-center -m-4 ">
            {/* Product 1 */}
            <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product1}
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full block"
                  alt="product1"
                />
                <h1 className="absolute bottom-0 h-11 left-0 w-full text-[#FFFFFF] bg-[#000000b6]  p-2  text-center">
                  <p className="text-[12px] font-semibold font-[Inter]">
                    Park Bench
                  </p>
                  <p className="font-light text-[9px]">154 Products</p>
                </h1>
              </span>
            </div>
            {/* product2*/}
            <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product2}
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full block"
                  alt="product1"
                />
                <h1 className="absolute bottom-0 h-11 left-0 w-full text-[#FFFFFF] bg-[#000000b6]  p-2  text-center">
                  <p className="text-[12px] font-semibold font-[Inter]">
                    Wooden Chair
                  </p>
                  <p className="font-light text-[9px]">157 Products</p>
                </h1>
              </span>
            </div>
            {/* Product 3 */}
            <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product3}
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full block"
                  alt="product1"
                />
                <h1 className="absolute bottom-0 h-11 left-0 w-full text-[#FFFFFF] bg-[#000000b6]  p-2  text-center">
                  <p className="text-[12px] font-semibold font-[Inter]">
                    Wing Chair
                  </p>
                  <p className="font-light text-[9px]">3,584 Products</p>
                </h1>
              </span>
            </div>

            {/* Product 4 */}
            <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product4}
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full block"
                  alt="product1"
                />
                <h1 className="absolute bottom-0 h-11 left-0 w-full text-[#FFFFFF] bg-[#000000b6]  p-2  text-center">
                  <p className="text-[12px] font-semibold font-[Inter]">
                    Desk Chair
                  </p>
                  <p className="font-light text-[9px]">154 Products</p>
                </h1>
              </span>
            </div>

            {/* Product 5 */}
            <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
              <span className="block relative h-48 rounded overflow-hidden">
                <Image
                  src={product5}
                  width={600}
                  height={600}
                  className="object-cover object-center w-full h-full block"
                  alt="product1"
                />
                <h1 className="absolute bottom-0 h-11 left-0 w-full text-[#FFFFFF] bg-[#000000b6] p-2  text-center">
                  <p className="text-[12px] font-semibold font-[Inter]">
                    Park Bench
                  </p>
                  <p className="font-light text-[9px]">154 Products </p>
                </h1>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
