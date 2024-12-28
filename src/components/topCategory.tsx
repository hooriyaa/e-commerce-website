import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Products = {
  id: string;
  title: string;
  image: string;
  productCount: number;
};

const TopCategory = async () => {
  const data = await client.fetch(`*[_type=="topCategory"]{
      id,
      title,
      image,
      productCount
  }`);
  return (
    <div className="mx-auto text-[Inter] md:w-full w-[820px] ml-9 sm:ml-auto pb-5">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-14">
          <h1 className="text-3xl md:text-2xl font-semibold text-left mb-6 ml-24">
            Top Categories
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center px-14">
            {data.map((item: Products) => (
              <div
                key={item.id}
                className="p-6 hover:scale-105 duration-150 group"
              >
                <div className="relative h-72 md:h-[270px] rounded overflow-hidden shadow-md ">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-fill object-center "
                  />
                  <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:block transition-all cursor-pointer bg-[#000000b6] text-[#FFFFFF] px-4 py-2">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs">{item.productCount} Products</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
