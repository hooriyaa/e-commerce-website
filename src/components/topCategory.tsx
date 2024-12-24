import React from "react";
import product1 from "/public/images/product5.png";
import product2 from "/public/images/product6.png";
import product3 from "/public/images/product7.png";
import Image from "next/image";

const TopCategory = () => {
  return (
    <div className="mx-auto text-[Inter] md:w-full w-[800px] ml-7 sm:ml-auto pb-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-14">
          <h1 className="text-3xl md:text-2xl font-semibold text-left mb-6 ml-12">
            Top Categories
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center">
            {/* Wing Chair */}
            <div className="p-6 hover:scale-105 duration-150 group">
            <div className="relative h-72 md:h-64 rounded overflow-hidden shadow-md">
                <Image
                  src={product1}
                  layout="fill"
                  objectFit="cover"
                  alt="Wing Chair"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:block transition-all cursor-pointer bg-[#000000b6] text-[#FFFFFF] px-4 py-2">
                  <p className="text-sm font-semibold">Wing Chair</p>
                  <p className="text-xs">3,584 Products</p>
                </div>
              </div>
            </div>
            {/* Wooden Chair */}
            <div className="p-6 hover:scale-105 duration-150 group">
              <div className="relative h-72 md:h-64 rounded overflow-hidden shadow-md">
                <Image
                  src={product2}
                  layout="fill"
                  objectFit="cover"
                  alt="Wooden Chair"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:block transition-all cursor-pointer bg-[#000000b6] text-[#FFFFFF] px-4 py-2">
                  <p className="text-sm font-semibold">Wooden Chair</p>
                  <p className="text-xs">157 Products</p>
                </div>
              </div>
            </div>
            {/* Desk Chair */}
            <div className="p-6 hover:scale-105 duration-150 group">
            <div className="relative h-72 md:h-64 rounded overflow-hidden shadow-md">
                <Image
                  src={product3}
                  layout="fill"
                  objectFit="cover"
                  alt="Desk Chair"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:block transition-all cursor-pointer bg-[#000000b6] text-[#FFFFFF] px-4 py-2">
                  <p className="text-sm font-semibold">Desk Chair</p>
                  <p className="text-xs">154 Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
