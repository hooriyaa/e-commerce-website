import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product2.png",
    tag: "New",
    oldPrice: null,
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product1.png",
    tag: "Sales",
    oldPrice: 30,
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product3.png",
    oldPrice: null,
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product4.png",
    oldPrice: null,
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product6.png",
    oldPrice: null,
    tag: "New",
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product10.png",
    oldPrice: 30,
    tag: "Sales",
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product11.png",
    oldPrice: null,
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product2.png",
    oldPrice: null,
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 9,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product11.png",
    oldPrice: null,
    tag: "New",
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 10,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product1.png",
    oldPrice: 30,
    tag: "Sales",
    description: "Stylish and durable, ideal for library or home use.",
  },
  {
    id: 11,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product3.png",
    oldPrice: null,
  },
  {
    id: 12,
    name: "Library Stool Chair",
    price: 20,
    image: "/images/product7.png",
    oldPrice: null,
    description: "Stylish and durable, ideal for library or home use.",
  },
];

export default function ProductGrid() {
  return (
    <div className="container px-4 mx-auto pt-5 max-w-7xl text-gray-600">
      <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-center p-6 pb-5 sm:pb-5">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/${product.id}`} className="block">
            <div className="overflow-hidden hover:scale-105 duration-100 hover:duration-150">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full h-full block"
                  width={300}
                  height={300}
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-white ${
                      product.tag === "New" ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#007580] font-medium text-base tracking-widest title-font mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className=" flex justify-between items-center font-[Inter]">
                    <p>${product.price}</p>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        ${product.oldPrice}
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
