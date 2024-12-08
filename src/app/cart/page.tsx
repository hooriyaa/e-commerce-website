import Image from "next/image";
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";


export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 text-[Inter] w-[800px] lg:w-full">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          {/* Bag Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-medium mb-6 text-[#111111]">Bag</h2>
            <div className="space-y-6">
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-6 gap-7"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={
                        item === 1
                          ?  "/images/product3.png"
                          : "/images/product5.png"
                      }
                      alt="Library Stool Chair"
                      className="w-20 h-20 object-cover rounded"
                      width={400}
                      height={400}
                    />
                    <div>
                      <h3 className="text-lg text-[#272343] font-normal">
                        Library Stool Chair
                      </h3>
                      <p className="text-sm text-[#757575] font-normal mt-5">
                        Ashen Slate/Cobalt Bliss
                      </p>
                      <p className="text-sm text-[#757575] font-normal">Size: L</p>
                      <div className="flex gap-3 p-2">
                      <FaRegHeart className="text-[#757575] cursor-pointer" />
                      <FaRegTrashAlt className="text-[#757575] cursor-pointer" />
                      </div>
                  
                    </div>
                    <div className="flex items-center space-x-4 mt-9 mr-5">
                    <span className="text-[#757575] font-normal">Quantity: 1</span>
                    
                  </div>
                  </div>
                
                  <p className="text-base font-normal text-[#111111]">MRP: $99</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className=" p-6 text-[#111111]">
            <h2 className="text-2xl font-semibold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between ">
                <span className="text-[#111111]">Subtotal</span>
                <span className="font-medium">$198.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#111111]">Estimated Delivery & Handling</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex w-full flex-col border-opacity-50 px-9 ">
          <div className="border"></div>
        </div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>$198.00</span>
              </div>
              <div className="flex w-full flex-col border-opacity-50 px-9 ">
          <div className="border"></div>
        </div>
            </div>
            <button
              className="mt-6 w-full bg-[#029FAE] text-white py-3 rounded-3xl text-lg font-medium hover:bg-[#02a0aebd]"
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
