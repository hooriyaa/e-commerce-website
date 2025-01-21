import Link from 'next/link'
import React from 'react'
import { RiEmotionSadLine } from 'react-icons/ri'

const ProductNotFoundPage = () => {
  return (
    <div>
        <div className="py-8 px-4 sm:px-6 lg:px-8 w-[850px] sm:w-full mx-auto max-w-7xl">
              <div className="flex flex-col justify-center items-center h-96 text-center">
                {/* Icon for visual appeal */}
                <div className="mb-6">
                  <RiEmotionSadLine className="h-24 w-24 text-gray-400 animate-bounce" />
                </div>
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  Oops! Product Not Found
                </h1>
                {/* Subtext */}
                <p className="text-lg text-gray-600 mb-8">
                  The product you are looking for does not exist or may have been removed.
                </p>
                {/* Button to go back or explore other products */}
                <Link
                  href="/" 
                  className="px-6 py-3 bg-[#029FAE] hover:bg-[#02abaee6] text-white rounded-lg transition duration-300"
                >
                  Explore Other Products
                </Link>
              </div>
            </div>
    </div>
  )
}

export default ProductNotFoundPage
