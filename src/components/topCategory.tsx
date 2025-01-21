import React from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type Products = {
  id: string;
  title: string;
  image: string;
  products: number;
};

const TopCategory = async () => {
  const data = await client.fetch(`*[_type=="categories"]{
      id,
      title,
      image,
      products
  }`);

  return (
    <div
      id="top-category"
      className="mx-auto text-[Inter] md:w-full w-[820px] ml-7 sm:ml-auto pb-5 px-10"
    >
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-14">
          <h1 className="text-3xl md:text-2xl font-semibold text-left mb-6 ml-12">
            Top Categories
          </h1>
          <div className="grid grid-cols-2 xl:grid-cols-3 justify-center">
            {data.map((item: Products, i: number) => (
              <div
                key={i}
                className="p-6 pr-5 hover:scale-105 duration-150 group"
              >
                 <Link
                  key={item.id}
                  href={`/${item.id}`} // Use the correct URL structure for your app
                  className="block"
                >
                  <div className="relative h-[300px] w-[340px] md:w-[320px] lg:w-[330px] rounded overflow-hidden">
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={600}
                      height={900}
                      className="w-full h-full object-fill object-center"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:block transition-all cursor-pointer bg-[#000000b6] text-[#FFFFFF] px-4 py-2">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs">{item.products} Products</p>
                    </div>
                  </div>
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;