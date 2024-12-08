import Image from "next/image";
import Link from "next/link";
import React from "react";
import image1 from "/public/images/pic2.png";
import image2 from "/public/images/facebook.png";
import image3 from "/public/images/Logos.png";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-[890px] sm:w-auto sm:mx-0">
        <footer className="text-gray-600 body-font  sm:left-0 ">
      <div className="container px-5  mx-auto">
        <div className="flex flex-wrap md:text-left text-center justify-center order-first">
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2  w-full px-4">
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
            <div>
              <h1 className="pt-2">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
              </h1>
              {/* facebbok image and icons */}
              <div className="flex pt-3 gap-3 justify-center sm:justify-start">
                <Image
                  src={image2}
                  width={700}
                  height={700}
                  alt=" facebook logo"
                  className="w-[38px] h-[38px] pt-1"
                />
                <FaTwitter className="w-[25px] h-[25px] mt-2" />
                <IoLogoInstagram className="w-[25px] h-[25px] mt-2" />
                <FaPinterest className="w-[25px] h-[25px] mt-2" />
                <IoLogoYoutube className="w-[25px] h-[25px] mt-2" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
            <h2 className="title-font font-medium font-[Inter] text-[#9A9CAA] tracking-widest text-[14px] mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 text-[16px] font-normal font-[Inter]">
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Sofa
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Armchair
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-gray-600 hover:text-[#007580] ">
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  wooden Chair
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Park Bench
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
            <h2 className="title-font font-medium font-[Inter] text-[#9A9CAA] tracking-widest text-[14px] mb-3">
              Support
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Help & Support
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Tearms & Conditions
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#272343] hover:text-[#007580] ">
                  Help
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-[14px] font-medium font-[Inter] text-[#9A9CAA] py-3"
                >
                  Newsletter
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent  focus:ring-[##029FAE] focus:border-[#029FAE] font-[Inter] text-normal outline-none text-[#9A9CAA] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#02a0aee3] rounded">
                Subscribe
              </button>
            </div>
            <p className="text-[#272343] text-sm mt-2 md:text-left text-[15px] font-normal font-[Inter] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="flex title-font font-normal font-[Poppins] text-[14px] items-center md:justify-center justify-center text-[#9A9CAA]">
          @ 2021 - Blogy - Designed & Develop by 
            <span className="ml-1 text-[#272343] ">Zakirsoft</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-center">
        <Image  width={700}
                  height={700}
                  alt="footer image" src={image3} className="text-[#000000] h-[27px] w-[227px] "/>
          </span>
        </div>
      </div>
    </footer>
    </div>
  
  );
};

export default Footer;
