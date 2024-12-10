import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCircleAlert } from "react-icons/ci";

export default function TopBar() {
  return (
    <div className="bg-[#272343] text-white py-2 w-full overflow-hidden text-[Inter]">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left gap-2">
        <p className="flex gap-1 text-sm whitespace-normal break-words text-[#FFFFFF]">
          <FaCheck className="pt-1 text-xl" /> Free shipping on all orders over
          $50
        </p>
        <div className="mt-2 md:mt-0 flex font-normal gap-4">
            <h1 className="flex">
            <option className="text-[#FFFFFF] ">Eng</option>
            <RiArrowDropDownLine className="text-2xl rounded-xl text-[#FFFFFF] pt-1" />
            </h1>
        
          <Link href={"/FAQ"} className="text-[#FFFFFF] ">Faqs</Link>
          <h1 className="flex">
          <CiCircleAlert className="text-2xl rounded-xl text-[#FFFFFF] pt-1" />
          <option className="text-[#FFFFFF] ">Need Help</option>
          </h1>
        </div>
      </div>
    </div>
  );
}
