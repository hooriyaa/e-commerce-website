import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { FiShoppingCart } from "react-icons/fi";
import { urlFor } from "@/sanity/lib/image";

interface Products {
  id: string;
  title: string;
  price: number;
  priceWithoutDiscount?: number;
  description:string,
  badge?: string;
  image: string;
}

export default async function ProductGrid() {
  const data = await client.fetch(`*[_type == "products"][0...12]{
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
                  alt={item.title}
                  className="object-cover object-center w-full h-fit block"
                  width={300}
                  height={300}
                />
                {item.badge && (
                  <span
                    className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-[#ffffff] ${
                      item.badge === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[#007580] font-medium text-base tracking-widest title-font mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex justify-between items-center font-[Inter]">
                    <p>${item.price}</p>
                    {item.priceWithoutDiscount && (
                      <span className="text-gray-500 line-through text-sm ml-2">
                        ${item.priceWithoutDiscount}
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


// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";
// import { useEffect, useState } from "react";

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   oldPrice?: number;
//   tag?: string;
//   image: string;
// }

// export default function ProductGrid() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container px-4 mx-auto max-w-7xl">
//         <div className="flex items-center justify-center min-h-[400px]">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container px-4 mx-auto max-w-7xl text-gray-600 pb-6">
//       <h1 className="text-3xl md:text-xl lg:text-2xl font-semibold font-[Inter] text-left px-6 pb-9">
//         All Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((item: Product) => (
//           <Link key={item.id} href={`/${item.id}`} className="block">
//             <div className="overflow-hidden group">
//               <div className="relative transition-transform duration-300 transform group-hover:scale-105">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   className="object-cover object-center w-full h-[300px]"
//                   width={300}
//                   height={300}
//                 />
//                 {item.tag && (
//                   <span
//                     className={`absolute top-2 left-2 text-sm font-semibold px-2 py-1 rounded text-white ${
//                       item.tag === "New" ? "bg-[#01AD5A]" : "bg-[#F5813F]"
//                     }`}
//                   >
//                     {item.tag}
//                   </span>
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-[#007580] font-medium text-base tracking-widest title-font mb-1">
//                   {item.name}
//                 </h3>
//                 <div className="flex items-center justify-between mt-2">
//                   <div className="flex justify-between items-center font-[Inter]">
//                     <p className="font-semibold">${item.price}</p>
//                     {item.oldPrice && (
//                       <span className="text-gray-500 line-through text-sm ml-2">
//                         ${item.oldPrice}
//                       </span>
//                     )}
//                   </div>
//                   <div className="relative group">
//                     <ShoppingCart className="text-[#272343] text-3xl bg-[#F0F2F3] rounded-md p-2 border-none transition-colors duration-200 group-hover:bg-[#029FAE] group-hover:text-white" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }