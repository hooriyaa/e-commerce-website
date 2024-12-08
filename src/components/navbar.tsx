import Image from "next/image";
import image1 from "/public/images/pic2.png";
import image2 from "/public/images/Profileicon.png";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-[#F0F2F3] py-4  px-4 sm:px-8 md:px-16 w-fit sm:w-full border-y border-[#272343]">
      <div className="w-full flex items-center justify-between gap-32 md:gap-20 ">
        {/* images and heading */}
        <div className="flex">
          <Image
            src={image1}
            width={700}
            height={700}
            alt="logo"
            className="w-6 h-7 pt-1"
          />
          <h1 className="text-[20px] font-medium pl-2 font-[Inter] ">
            Comforty
          </h1>
        </div>

        {/* input div */}
        <div className="flex justify-evenly bg-[#FFFFFF] px-8 py-2 rounded-md gap">
          <input
            type="text"
            placeholder="Search here..."
            className="text-[15px] px-1 outline-transparent "
          />
          <CiSearch className="text-black w-5 h-5" />
        </div>
        {/* right items */}
        <div className="flex gap-4">
          {/* cart div */}
          <div className="flex gap-2 bg-[#FFFFFF]  px-4 py-2 rounded-md ml-8">
            <IoCartOutline className="w-6 h-7 cursor-pointer " />
            <Link href="/cart">
            <h1>Cart</h1>
            </Link>
          </div>
         
          <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3">
            <FaRegHeart className="w-5 h-5 text-sm cursor-pointer " />
          </div>
          <div className="bg-[#FFFFFF] h-[44px] w-[44px] rounded-md p-3">
            <Image
              src={image2}
              width={700}
              height={700}
              alt="profile"
              className="w-5 h-5 text-sm text-black cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
