import React from "react";
import product1 from "/public/images/product2.png";
import product2 from "/public/images/product1.png";
import product3 from "/public/images/product3.png";
import product4 from "/public/images/product4.png";
import product5 from "/public/images/product5.png";
import product6 from "/public/images/product10.png";
import product7 from "/public/images/product11.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const OurProducts = () => {
  return (
    <div className="w-[500px] sm:w-auto mx-52 sm:mx-0">
      <section className="text-[#E5E5E5]  mt-12 ">
      <h1 className=" text-base md:text-xl lg:text-2xl text-[#272343] font-semibold font-[inter] text-center sm:pl-12  md:px-6 py-4 ">
        Our Products
      </h1>
      <div className="flex items-center justify-center pl-8 mb-8 gap-7 text-[#272343] whitespace-nowrap">
        <Link href={"/"} className=" hover:text-[#029FAE] cursor-pointer">
          All
        </Link>
        <Link
          href={"/shop"}
          className=" hover:text-[#029FAE] text-[#9A9CAA] cursor-pointer"
        >
          Newest
        </Link>
        <Link
          href={"/Product"}
          className=" hover:text-[#029FAE] cursor-pointer"
        >
          Trending
        </Link>
        <Link
          href={"/pages"}
          className=" hover:text-[#029FAE] text-[#9A9CAA] cursor-pointer"
        >
          Best Sellers
        </Link>
        <Link
          href={"/about"}
          className=" hover:text-[#029FAE] text-[#9A9CAA] cursor-pointer"
        >
          Featured
        </Link>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap justify-center items-center -m-4 ">
          {/* Product 1 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <h1 className="absolute top-2 left-2 text-white bg-[#01AD5A] p-2 text-xs rounded-md">
                New
              </h1>
              <FaRegHeart className="absolute top-2 right-2 text-black bg-[#FFFFFF] p-2 text-3xl rounded-md" />
              <Image
                src={product1}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product1"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$20</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>

          {/* Product 2 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <h1 className="absolute top-2 left-2 text-white bg-[#F5813F] p-2 text-xs rounded-md">
                Sales
              </h1>
              <Image
                src={product2}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product2"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$20</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>

          {/* Product 3 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <Image
                src={product3}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product3"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$20</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>

          {/* Product 4 */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <Image
                src={product4}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product4"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$20</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>

          {/* Product 5 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <h1 className="absolute top-2 left-2 text-white bg-[#01AD5A] p-2 text-xs rounded-md">
                New
              </h1>
              <Image
                src={product5}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product4"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$89</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>
          {/* Product 6 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <h1 className="absolute top-2 left-2 text-white bg-[#F5813F] p-2 text-xs rounded-md">
                Sales
              </h1>
              <Image
                src={product6}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product4"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$77</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>
          {/* Product 7 */}
          <div className="lg:w-1/5 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <Image
                src={product7}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product4"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$37</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>
          {/* Product 8 */}
          <div className="lg:w-1/4 md:w-1/2 sm:w-1/2 p-4 w-full hover:scale-105 duration-100 hover:duration-150">
            <span className="block relative h-48 rounded overflow-hidden">
              <Image
                src={product2}
                width={600}
                height={600}
                className="object-cover object-center w-full h-full block"
                alt="product4"
              />
            </span>
            <div className="mt-4 flex justify-between items-center font-[Inter]">
              <div>
                <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1">
                  Library Stool Chair
                </h3>
                <p className="mt-1 text-[#272343]">$200</p>
              </div>
              <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md  p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default OurProducts;
