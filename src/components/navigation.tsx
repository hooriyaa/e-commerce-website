"use client";
import Link from "next/link";
import HamburgerMenu from "./hamburger";

const Navigation = () => {
  return (
    <div className="bg-[#FFFFFF] top-0 px-4 sm:px-8 md:px-16 font-[Inter] py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Hamburger Menu for smaller screens */}
          <div className="sm:hidden">
            <HamburgerMenu />
          </div>

          {/* Links for larger screens */}
          <div className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 bg-[#FFFFFF]">
            <Link href="/" className="hover:text-[#029FAE] cursor-pointer">
              Home
            </Link>
            <Link href="/shop" className="hover:text-[#029FAE] cursor-pointer">
              Shop
            </Link>
            <Link href="/allProducts" className="hover:text-[#029FAE] cursor-pointer">
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
        <div className="text-base md:text-base whitespace-nowrap text-right ml-[600px] sm:ml-auto">
          <Link
            href="/contact"
            className="text-[#636270] hover:text-[#029FAE] cursor-pointer font-normal"
          >
            Contact:{" "}
            <span className="text-[#272343] font-medium">(808) 555-0111</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
