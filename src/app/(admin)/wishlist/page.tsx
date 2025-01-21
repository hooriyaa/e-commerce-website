"use client";
import { useCart } from "@/components/context/CartContext"; 
import Image from "next/image";
import Link from "next/link";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useCart();

  return (
    <div className="pb-20 pt-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl sm:text-3xl text-center text-[#000000] font-semibold font-[Inter] px-6 pb-9">
        My Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <div className="text-center ">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Your wishlist is empty!</h2>
          <p className="text-gray-500 mb-6">
            Looks like you have not added any items to your wishlist yet.
          </p>
          <Link href="/allProducts">
            <button className="bg-[#029FAE] hover:bg-[#02abaee6] text-white px-8 py-3 text-lg rounded-md">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-3">
          {wishlist.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-[#F5813F]"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;




// "use client";
// import { useCart } from "@/components/context/CartContext";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { RiShoppingCartLine } from "react-icons/ri";

// const WishlistPage = () => {
//   const { wishlist, removeFromWishlist, addToCart } = useCart();

//   const handleAddToCart = (item: any) => {
//     if (item.stock > 0) {
//       addToCart(item, item.stock);
//       removeFromWishlist(item.id);
//     }
//   };

//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <h1 className="text-4xl font-bold mb-8 text-gray-900 text-center">My Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <div className="text-center py-16">
//           <h2 className="text-xl font-medium text-gray-700 mb-4">Your wishlist is empty!</h2>
//           <p className="text-gray-500 mb-6">
//             Looks like you have not added any items to your wishlist yet.
//           </p>
//           <Link href="/allProducts">
//             <Button className="bg-[#029FAE] hover:bg-[#02abaee6] text-white px-8 py-3 text-lg">
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {wishlist.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <div className="relative">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   width={400}
//                   height={400}
//                   className="w-full h-64 object-cover rounded-t-lg"
//                 />
//                 {item.stock === 0 && (
//                   <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
//                     Out of Stock
//                   </span>
//                 )}
//               </div>
//               <div className="p-6">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h2>
//                 <p className="text-xl font-bold text-[#029FAE] mb-4">${item.price.toFixed(2)}</p>
//                 <div className="flex gap-4">
//                   <Button
//                     onClick={() => removeFromWishlist(item.id)}
//                     className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
//                   >
//                     Remove
//                   </Button>
//                   <Button
//                     onClick={() => handleAddToCart(item)}
//                     disabled={item.stock <= 0}
//                     className={`flex-1 ${
//                       item.stock > 0
//                         ? "bg-[#029FAE] hover:bg-[#02abaee6]"
//                         : "bg-gray-400 cursor-not-allowed"
//                     } text-white px-4 py-2 rounded-lg`}
//                   >
//                     <RiShoppingCartLine className="mr-2" />
//                     Add to Cart
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
