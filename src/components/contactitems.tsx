import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  return (
    <section className="text-gray-600 body-font bg-[#F4F4F4] my-7 w-full px-10 ">
      <div className="container px-5 p-14 mx-auto ">
        <div className="flex -m-2  justify-center items-center">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full font-[Poppins]  ">
            <div className="h-full flex items-center ">
              <Image
                alt="team"
                className="w-[60px] h-[60px] object-contain object-center mr-4"
                src="/images/contactitem1.png"
                width={400}
                height={400}
              />
              <div className="flex-grow">
                <h2 className="text-[#242424] text-lg font-semibold">
                  High Quality
                </h2>
                <p className="text-[#898989] font-[Poppins] font-medium ">
                  crafted from top materials
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full font-[Poppins] ">
            <div className="h-full flex items-center ">
              <Image
                alt="team"
                className="w-[60px] h-[60px] object-contain object-center mr-4"
                src="/images/contactitem2.png"
                width={400}
                height={400}
              />
              <div className="flex-grow">
                <h2 className="text-[#242424] text-lg font-semibold">
                  Warranty Protection
                </h2>
                <p className="text-[#898989] font-[Poppins] font-medium ">
                  Over 2 years
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full font-[Poppins] ">
            <div className="h-full flex items-center ">
              <Image
                alt="team"
                className="w-[60px] h-[60px] object-contain object-center mr-4"
                src="/images/contactitem3.png"
                width={400}
                height={400}
              />
              <div className="flex-grow">
                <h2 className="text-[#242424] text-lg font-semibold">
                  24 / 7 Support
                </h2>
                <p className="text-[#898989] font-[Poppins] font-medium ">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
