"use client"
import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/components/allProducts/productGrid";
import { Button } from "@/components/ui/button";
import { RiShoppingCartLine } from "react-icons/ri";
import FeaturedProducts from "@/components/featuresProducts";

export default function ProductDetail() {
  const { id } = useParams();

  const productId = Array.isArray(id) ? id[0] : id;
  const product = productId
    ? products.find((item) => item.id === parseInt(productId))
    : null;

  if (!product) {
    return <p className="text-center mt-10">Product not found.</p>;
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 w-[850px] sm:w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>
        <div className="space-y-4 mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {product.name}
          </h1>
          <div className="inline-block bg-[#029FAE] text-white px-4 py-2 rounded-full text-lg">
            ${product.price.toFixed(2)} USD
          </div>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="border"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg">
            {product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, doloremque deserunt delectus tempora quos quas similique maiore
          </p>
          <Button className="w-full sm:w-auto bg-[#029FAE] hover:bg-teal-600 py-5">
            <RiShoppingCartLine />
            Add to Cart
          </Button>
        </div>
      </div>
      <FeaturedProducts/>
    </div>
  );
}
