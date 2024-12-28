import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FiShoppingCart } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

interface Products {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  tag?: string;
  image: string;
}

export default async function ProductGrid() {
  const data = await client.fetch(`*[_type=="AllProducts"]{
    id,
    name,
    price,
    oldPrice,
    tag,
    description,
    image
  }`);

  return (
    <div className="container px-4 mx-auto max-w-7xl text-gray-600 pb-6">
      <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-left px-6 pb-9">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item: Products) => (
          <Link key={item.id} href={`/${item.id}`} className="block">
            <div className="overflow-hidden hover:scale-105 duration-100 hover:duration-150">
              <div className="relative">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  className="object-cover object-center w-full h-fit block"
                  width={300}
                  height={300}
                />
                {item.tag && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-[#ffffff] ${
                      item.tag === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                    }`}
                  >
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#007580] font-medium text-base tracking-widest title-font mb-1">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex justify-between items-center font-[Inter]">
                    <p>${item.price}</p>
                    {item.oldPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        ${item.oldPrice}
                      </span>
                    )}
                  </div>
                  <FiShoppingCart className="text-[#272343] text-3xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
