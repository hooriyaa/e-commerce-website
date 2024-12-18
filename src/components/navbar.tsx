"use client";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "@/components/context/CartContext";
import { UserButton, useUser } from "@clerk/nextjs";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { totalItems } = useCart();

  return (
    <div className="bg-[#F0F2F3] py-4 px-4 sm:px-8 md:px-16 w-fit sm:w-full border-y">
      <div className="w-full flex items-center justify-between gap-[140px] md:gap-20">
        <div className="flex">
          <h1 className="text-[20px] font-medium pl-2 font-[Inter]">
            Comforty
          </h1>
        </div>

        <div className="flex justify-evenly bg-[#FFFFFF] px-7 py-2 rounded-md gap">
          <input
            type="text"
            placeholder="Search here..."
            className="text-[15px] px-1 outline-transparent"
          />
          <CiSearch className="text-black w-5 h-5" />
        </div>

        <div className="flex gap-4">
          <div className="flex gap-2 bg-[#FFFFFF] px-4 py-2 rounded-md whitespace-nowrap">
            <IoCartOutline className="w-6 h-7 cursor-pointer" />
            <Link href="/cart">
              <h1>
                Cart{" "}
                <span className="text-[#FFFFFF] font-medium bg-[#007580] rounded-full px-2 py-0.5 text-sm">
                  {totalItems}
                </span>
              </h1>
            </Link>
          </div>

          {!isSignedIn ? (
            <div className="flex gap-1">
              <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3">
                <FaRegHeart className="w-5 h-5 text-sm cursor-pointer" />
              </div>
              <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3">
                <RiContactsLine className="w-5 h-5 text-sm cursor-pointer" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <UserButton afterSignOutUrl="/" />
              <span className="text-sm">{user?.firstName || "Welcome"}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
