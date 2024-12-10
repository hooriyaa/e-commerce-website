import React from "react";
import Link from "next/link";

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-6 w-[890px]">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
      <p className="text-lg text-gray-600 mb-8">
        We are working hard to bring this feature to you. Stay tuned!
      </p>
      <Link href="/">
        <button className="px-6 py-3 bg-[#029FAE] text-white rounded hover:bg-[#027f8a] transition-all">
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Shop;
