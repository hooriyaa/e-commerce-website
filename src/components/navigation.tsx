"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  return (
    <div>
      {/* navigation div */}
      <div className="bg-white py-4 sticky top-0 z-10 px-4 sm:px-8 md:px-16 w-full">
        <div className="w-full flex items-center justify-between">
          {/* Left side: Hamburger menu and links */}
          <div className="flex items-center gap-6">
            {/* Hamburger Menu */}
            <div className="flex items-center gap-2 border border-[#272343] bg-white px-3 py-2 rounded-md">
              <RxHamburgerMenu className="w-5 h-5 cursor-pointer" />
              <h1 className="text-sm lg:text-base whitespace-nowrap">All Categories</h1>
            </div>

            {/* Links for larger screens */}
            <div className="flex items-center gap-10">
              <Link href="/" className="hover:text-[#029FAE] cursor-pointer">
                Home
              </Link>
              <Link href="/shop" className="hover:text-[#029FAE] cursor-pointer">
                Shop
              </Link>
              <Link href="/product" className="hover:text-[#029FAE] cursor-pointer">
                Product
              </Link>
              <Link href="/pages" className="hover:text-[#029FAE] cursor-pointer">
                Pages
              </Link>
              <Link href="/about" className="hover:text-[#029FAE] cursor-pointer">
                About
              </Link>
            </div>
          </div>

          {/* Contact section */}
          <div className="flex gap-1 text-sm md:text-base whitespace-nowrap">
            <h1 className="text-gray-500 pl-16">Contact:</h1>
            <span className="font-medium text-[#272343]">
              (808) 555-0111
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
