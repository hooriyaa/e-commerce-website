import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
  const products = [
    {
      image: '/images/product2.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product11.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product7.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product3.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
    {
      image: '/images/product5.png',
      name: 'Library Stool Chair',
      price: '$99',
    },
  ];

  return (
    <section className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl  font-bold font-[Inter] text-[#000000]">Featured Products</h2>
          <Link href="#" className="flex items-center gap-2 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-4">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg overflow-hidden flex justify-center flex-col items-center">
              <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-64 object-contain" />
              <div className="p-4 flex justify-around items-center gap-6">
                <h3 className="text-base font-normal text-[#272343]">{product.name}</h3>
                <p className="font-bold font-[Inter] text-[#000000] text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;


// "use client"
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";

// type Products = {
//   id: string;
//   title: string;
//   image: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   inventory: string;
//   description: string;
//   badge?: string;
// };

// const FeaturedProducts = async () => {
//   const data =
//     await client.fetch(`*[_type=="products" && "featured" in tags][0...5]{
//        id,
//       title,
//       price,
//       priceWithoutDiscount,
//       badge,
//       description,
//       inventory,
//       image,
//     }`);

//   return (
//     <section className="py-16 bg-white px-6">
//       <div className="container mx-auto">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl  font-bold font-[Inter] text-[#000000]">
//             Featured Products
//           </h2>
//           <Link href="#" className="flex items-center gap-2 hover:underline">
//             View all
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-10">
//           {data.map((product: Products, index: number) => (
//             <div
//               key={index}
//               className="rounded-lg overflow-hidden flex justify-center flex-col items-center"
//             >
//               <Link key={product.id} href={`/${product.id}`} className="block">
//                 <Image
//                   src={urlFor(product.image).url()}
//                   alt={product.title}
//                   width={400}
//                   height={400}
//                   className="w-full h-64 object-contain"
//                 />
//               </Link>
//               <div className="p-4 flex justify-around items-center gap-6">
//                 <h3 className="text-base font-normal text-[#272343]">
//                   {product.title}
//                 </h3>
//                 <p className="font-bold font-[Inter] text-[#000000] text-sm">
//                   {product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturedProducts;

