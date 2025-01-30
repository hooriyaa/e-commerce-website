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


