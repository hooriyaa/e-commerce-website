import Image from "next/image";
import Features1 from "/public/images/Features1.png";
import Features2 from "/public/images/Features2.png";
import Features3 from "/public/images/Features3.png";
import Features4 from "/public/images/Features4.png";

const Features = () => {
  return (
    <div className="bg-white flex flex-wrap items-center justify-center sm:w-full md:w-[73%]  mx-auto ">
    <div className="flex items-center justify-center mt-20 ml-96 sm:ml-0 gap-10 ">
      <Image width={700} height={700} alt='logo1' src={Features1} className='h-10  w-48 '/>
        <Image width={700} height={700} alt='logo1' src={Features2} className='h-10  w-48'/>
        <Image width={700} height={700} alt='logo1' src={Features3} className='h-10 w-48 '/>
        <Image width={700} height={700} alt='logo1' src={Features4} className='h-10  w-48'/>
      </div>
    </div>
  );
};

export default Features;
