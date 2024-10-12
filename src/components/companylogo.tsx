import Image from "next/image";
import logo1 from "/public/images/Logo1.png";
import logo2 from "/public/images/Logo2.png";
import logo3 from "/public/images/Logo3.png";
import logo4 from "/public/images/Logo4.png";
import logo5 from "/public/images/Logo5.png";
import logo6 from "/public/images/Logo6.png";
import logo7 from "/public/images/Logo7.png";

const Companylogo = () => {
  return (
    <div className="bg-white flex flex-wrap items-center justify-evenly sm:w-full md:w-[73%]  mx-auto ">
    <div className="flex items-center justify-center mt-20 ml-80 sm:ml-0 gap-10 sm:gap-15">
      <Image width={700} height={700} alt='logo1' src={logo1} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo2} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo3} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo4} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo5} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo6} className='h-20 w-20'/>
        <Image width={700} height={700} alt='logo1' src={logo7} className='h-20 w-20'/>
      </div>
    </div>
  );
};

export default Companylogo;
