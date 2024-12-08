import InstagramFeed from "@/components/allProducts/intagramFeed";
import NewsLetter from "@/components/allProducts/newsLetter";
import ProductGrid from "@/components/allProducts/productGrid";
import React from "react";

const page = () => {
  return (
    <main className="w-[740px] sm:w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 ml-16 md:ml-0">
      <ProductGrid />
      <div className="bg-[#F0F2F3] m-7">
        <NewsLetter />
        <InstagramFeed />
      </div>
    </main>
  );
};

export default page;
