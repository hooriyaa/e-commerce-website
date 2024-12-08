import ContactInfo from "@/components/contactitems";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

export default function Contact() {
  return (
    <div className=" flex flex-col items-center justify-center mx-auto w-[800px]  ml-14 md:ml-auto md:w-full mt-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold">Get In Touch With Us</h1>
        <p className="text-gray-600 mt-2 ">
          For More Information About Our Product & Services, Please Feel Free To
          Drop Us<br></br>
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      {/* Contact Section */}
      <div className="flex flex-row justify-between gap-36 w-full max-w-4xl mt-4 ">
        {/* Contact Info */}
        <div className="flex flex-col space-y-6 w-full md:w-1/2">
          <div className="flex items-center space-x-4">
            <FaLocationDot size={21} className=" mb-12" />
            <div>
              <h2 className="font-semibold font-[Poppins]">Address</h2>
              <p>236 5th SE Avenue, New <br></br> York NY10000, United <br></br> States</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt size={21} className=" mb-12" />
            <div>
              <h2 className="font-semibold font-[Poppins]">Phone</h2>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+64) 456-6789</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <GoClockFill size={21} className="mb-12" />
            <div>
              <h2 className="font-semibold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                className="w-full border p-6 border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                placeholder="Abc"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                className="w-full border p-6 border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                placeholder="Abc@def.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="w-full border p-6 border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                placeholder="This is optional"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="w-full border p-10 py-6 border-gray-300 rounded-lg px-4 mt-1 focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                placeholder="Hi! I'd like to ask about"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#029FAE] text-white font-semibold py-2 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Info */}
<ContactInfo/>
    </div>
  );
}
