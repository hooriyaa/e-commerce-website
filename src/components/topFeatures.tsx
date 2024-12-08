import Image from "next/image";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  image: string;
  description: string;
  tag: string | null;
}

// Explicitly type the products array
export const products: Product[] = [
  {
    id: 1,
    name: 'Library Stool Chair',
    price: 20,
    oldPrice: null,
    image: '/images/product2.png',
    description: 'Elegant and functional chair with a discounted price.',
    tag: 'Sales',
  },
  {
    id: 2,
    name: 'Library Stool Chair',
    price: 20,
    oldPrice: null,
    image: '/images/product1.png',
    description: 'A comfortable and stylish library stool chair perfect for any setting.',
    tag: 'New',
  },
  {
    id: 3,
    name: 'Library Stool Chair',
    price: 20,
    oldPrice: null,
    image: '/images/product3.png',
    description: 'Modern design that complements any interior.',
    tag: null,
  },
  {
    id: 4,
    name: 'Library Stool Chair',
    price: 20,
    oldPrice: null,
    image: '/images/product4.png',
    description: 'Stylish and durable, ideal for library or home use.',
    tag: null,
  },
];

export default function TopFeatures() {
  return (
    <div className="container px-4 mx-auto pt-5 max-w-7xl text-gray-600 ml-24 w-[700px] md:w-fit md:ml-auto">
      <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-left p-6 pb-5 sm:pb-5">
        Featured Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/${product.id}`} className="block">
            <div className="overflow-hidden hover:scale-105 duration-100 hover:duration-150">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover object-center w-full h-auto block max-w-full"
                  width={300}
                  height={300}
                />
                {product.tag && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-white ${product.tag === 'New' ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#029FAE] font-normal text-base tracking-widest title-font mb-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="mb-3 flex justify-between items-center font-[Inter]">
                    <p className="mt-1">${product.price}</p>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        ${product.oldPrice}
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
