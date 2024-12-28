"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "react-toastify";
import { useCart } from "@/components/context/CartContext";
import { Button } from "@/components/ui/button";
import { RiShoppingCartLine } from "react-icons/ri";
import FeaturedProducts from "@/components/featuresProducts";

interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductDetailProps {
  data: ProductData;
}

export default function ProductDetail({ data }: ProductDetailProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: Number(data.id),
      name: data.name,
      price: data.price,
      image: urlFor(data.image).url(),
      quantity: 1,
    });

    toast.success(`Item Successfully Placed in Your Cart!`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 w-[850px] sm:w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <Image
            src={urlFor(data.image).url()}
            alt={data.name}
            width={400}
            height={400}
            className="rounded-lg object-cover max-w-full h-auto"
          />
        </div>
        <div className="space-y-4 mt-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {data.name}
          </h1>
          <div className="inline-block  bg-[#029FAE] text-[#ffffff] px-4 py-2 rounded-full text-lg hover:bg-[#02abaee6]">
            ${data.price.toFixed(2)} USD
          </div>
          <div className="flex w-full flex-col border-opacity-50">
            <div className="border"></div>
          </div>
          <p className="text-gray-600 text-base sm:text-lg">
            {data.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Architecto, doloremque deserunt delectus tempora
            quos quas similique maiore
          </p>
          <Button
            onClick={handleAddToCart}
            className="w-full sm:w-auto  bg-[#029FAE] hover:bg-[#02abaee6] py-5 text-[#ffffff]"
          >
            <RiShoppingCartLine className="mr-2 text-[#ffffff]" />
            Add to Cart
          </Button>
        </div>
      </div>
      <FeaturedProducts />
    </div>
  );
}
