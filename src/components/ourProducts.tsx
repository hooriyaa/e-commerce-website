import React from "react";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Products = {
  id: string;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  tag?: string;
};

const OurProducts = async () => {
  const data = await client.fetch(`*[_type=="ourProducts"]{
      id,
      name,
      image,
      price,
      oldPrice,
      tag,
  }`);

  return (
    <div className="w-[720px] ml-20 sm:ml-0 sm:w-auto sm:mx-0 pb-12">
      <section className="text-gray-600 body-font sm:left-0 mx-auto max-w-7xl">
        <div className="container px-5 pt-24 mx-auto">
          <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] ml-48 sm:ml-[40%] p-6 pb-14">
            Our Products
          </h1>
          <div className="container px-5 mx-auto ">
            <div className="flex flex-wrap justify-center items-center -m-4 ">
              {data.map((product: Products) => (
                <div
                  key={product.id}
                  className="xl:w-1/4 md:w-1/3 w-1/2 p-4 hover:scale-105 duration-100 hover:duration-150"
                >
                  <span className="block relative h-60 rounded overflow-hidden">
                    {" "}
                    {/* Increased height */}
                    {product.tag && (
                      <span
                        className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-white ${
                          product.tag === "New"
                            ? "bg-[#01AD5A]"
                            : "bg-[#F5813F]"
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                    <Link
                      key={product.id}
                      href={`/${product.id}`}
                      className="block"
                    >
                      <Image
                        src={urlFor(product.image).url()}
                        width={600}
                        height={900}
                        className="object-cover object-center w-full h-full block"
                        alt={`${product.name}`}
                      />
                    </Link>
                  </span>
                  <div className="mt-4 flex justify-between items-center font-[Inter]">
                    <div>
                      <Link key={product.id} href={`/${product.id}`}>
                        <h3 className="text-[#007580] font-medium text-sm tracking-widest title-font mb-1 hover:underline">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="mt-1 text-[#272343]">${product.price}</p>
                    </div>
                    <IoCartOutline className="text-[#272343] text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProducts;
