import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type Products = {
  id: string;
  title: string;
  image: string;
  price: number;
  priceWithoutDiscount?: number;
  badge?: string;
};

export default async function TopFeatures() {
  const data = await client.fetch(`*[_type=="products"][4...8]{
    id,
    title,
    price,
    priceWithoutDiscount,
    badge,
    description,
    inventory,
    image,
}`);
  return (
    <div id="top-features" className="container px-4 mx-auto pt-5 max-w-7xl text-gray-600 ml-24 w-[700px] md:w-full md:ml-auto">
      <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-left p-6 pb-5 sm:pb-5">
        Featured Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product: Products) => (
          <Link key={product.id} href={`/${product.id}`} className="block">
            <div className="overflow-hidden hover:scale-105 duration-100 hover:duration-150">
              <div className="relative">
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.title}
                  className="object-cover object-center w-full h-auto block max-w-full"
                  width={300}
                  height={300}
                />
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-white ${product.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"}`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#029FAE] font-normal text-base tracking-widest title-font mb-1">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="mb-3 flex justify-between items-center font-[Inter]">
                    <p className="mt-1">${product.price}</p>
                    {product.priceWithoutDiscount && (
                      <span className="text-gray-500 line-through text-sm ml-2 pt-1">
                        ${product.priceWithoutDiscount}
                      </span>
                    )}
                  </div>
                  <FiShoppingCart className="mb-4 text-[#272343] text-4xl bg-[#F0F2F3] rounded-md p-2 border-none hover:bg-[#029FAE] hover:text-[#FFFFFF]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
