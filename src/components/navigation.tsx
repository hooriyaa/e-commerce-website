"use client";
import Link from "next/link";
const Navigation = () => {
  return (
    <div>
      {/* navigation div */}
      <div className="bg-white py-4 sticky top-0 z-10 px-4 sm:px-8 md:px-16 sm:w-fit">
        <div className="w-full flex items-center justify-between">
          {/* Left side: Hamburger menu and links */}
          <div className="flex items-center gap-6">
            {/* Hamburger Menu */}
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md">
            </div>

            {/* Links for larger screens */}
            <div className="flex items-center gap-10 sm:gap-7">
              <Link href="/" className="hover:text-[#029FAE] cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#029FAE] cursor-pointer">
                About
              </Link>
              <Link href="/allProducts" className="hover:text-[#029FAE] cursor-pointer">
                Product
              </Link>
              <Link href="/FAQ" className="hover:text-[#029FAE] cursor-pointer">
              FAQ
              </Link>
              <Link href="/contact" className="hover:text-[#029FAE] cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact section */}
          <div className="sm:flex gap-1 text-sm md:text-base whitespace-nowrap md:ml-72 ">
            <h1 className="text-gray-500 lg:pl-40 pl-36">Contact: (808) 555-0111</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
