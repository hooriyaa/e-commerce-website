import React from "react";
import product2 from "/public/images/product5.png";
import product3 from "/public/images/product6.png";
import product4 from "/public/images/product7.png";
import Image from "next/image";

const TopCategory = () => {
  return (
    <div className="w-[700px] ml-20 sm:ml-0 sm:w-auto sm:mx-0">
      <section className="text-gray-600 body-font  sm:left-0 ">
        <div className="container px-5 pt-14 mx-auto">
          <h1 className=" text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-left  p-6 pb-12">
            Top categories
          </h1>
          <div className="container px-5 mx-auto">
            <div className="flex flex-wrap justify-center items-center -m-4 ">
              {/* product2*/}
              <div className="lg:w-1/3 w-1/2 p-4 hover:scale-105 duration-100 hover:duration-150">
                <span className="block relative h-48 rounded overflow-hidden">
                  <Image
                    src={product2}
                    width={600}
                    height={600}
                    className="object-contain object-center w-full h-full block"
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
              <div className="lg:w-1/3 w-1/2 p-4 l hover:scale-105 duration-100 hover:duration-150">
                <span className="block relative h-48 rounded overflow-hidden">
                  <Image
                    src={product3}
                    width={600}
                    height={600}
                    className="object-contain object-center w-full h-full block"
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
              <div className="lg:w-1/3 w-1/2  p-4 hover:scale-105 duration-100 hover:duration-150">
                <span className="block relative h-48 rounded overflow-hidden">
                  <Image
                    src={product4}
                    width={600}
                    height={600}
                    className="object-contain object-center w-full h-full block"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
