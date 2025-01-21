"use client";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { RiContactsLine } from "react-icons/ri";
import Image from "next/image";
import logo from "../../public/images/Logo-Icon.png";
import { ComboboxDemo } from "./SearchBar";


const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { cart, wishlist, moveToWishlist } = useCart();

  const handleAddToWishlist = () => {
    if (cart.length === 0) {
      return;
    }
    cart.forEach((item) => moveToWishlist(item.id));
  };

  return (
    <div className="bg-[#F0F2F3] py-4 px-7 sm:px-8 md:px-16 w-fit sm:w-full border-y font-[Inter]">
      <div className="w-full flex items-center justify-center lg:justify-between gap-[101px] md:gap-14">
        <div className="flex">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="logo"
            className="w-[30px] h-[30px]"
          />
          <h1 className="text-[20px] text-[#272343] font-medium pl-2 font-[Inter]">
            Comforty
          </h1>
        </div>

        <div className="flex">
        <ComboboxDemo/>
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2 bg-[#FFFFFF] px-4 py-2 rounded-md whitespace-nowrap">
            <IoCartOutline className="w-6 h-7 cursor-pointer" />
            <Link href="/cart">
              <h1 className="text-[#272343] font-medium cursor-pointer">
                Cart{" "}
                <span className="text-[#FFFFFF] font-medium bg-[#007580] rounded-full px-2 py-1 text-sm">
                  {cart.length}
                </span>
              </h1>
            </Link>
          </div>

          {!isSignedIn ? (
            <div className="flex gap-2">
              <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3 relative">
                <Link href="/wishlist">
                  <FaRegHeart
                    className="w-5 h-5 text-sm cursor-pointer"
                    onClick={handleAddToWishlist}
                  />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2  w-5 h-5 flex items-center justify-center  text-[#FFFFFF] font-medium bg-[#007580] rounded-full px-2 py-1 text-sm">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>
              <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3">
                <RiContactsLine className="w-5 h-5 text-sm cursor-pointer" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3 relative">
                <Link href="/wishlist">
                  <FaRegHeart
                    className="w-5 h-5 text-sm cursor-pointer"
                    onClick={handleAddToWishlist}
                  />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2  w-5 h-5 flex items-center justify-center  text-[#FFFFFF] font-medium bg-[#007580] rounded-full px-2 py-1 text-sm">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm ">{user?.firstName || "Welcome"}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
