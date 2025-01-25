"use client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { toast } from "react-toastify";
import { useCart } from "@/components/context/CartContext";
import { Button } from "@/components/ui/button";
import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import FeaturedProducts from "@/components/featuresProducts";
import ProductNotFoundPage from "@/components/product-not-found";
import ReviewSection from "@/components/ReviewsSection";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";


interface ProductData {
  id: string;
  title: string;
  price?: number;
  image: string;
  description: string;
  inventory: number;
}

interface ProductDetailProps {
  data: ProductData;
}

export default function ProductDetail({ data }: ProductDetailProps) {
  const { addToCart, addToWishlist, cart, wishlist } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!data) {
    return <ProductNotFoundPage />;
  }

  const isInWishlist = wishlist.some((item) => item.id === Number(data.id));

  const handleAddToCart = () => {
    if (data.inventory <= 0) {
      toast.error("This item is out of stock!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const itemInCart = cart.find((item) => item.id === Number(data.id));
    const currentQuantity = itemInCart?.quantity || 0;

    if (currentQuantity < data.inventory) {
      addToCart(
        {
          id: Number(data.id),
          name: data.title,
          price: data.price ?? 0,
          image: urlFor(data.image).url(),
          quantity: 1,
          stock: data.inventory,
        },
        data.inventory
      );
      toast.success("Item successfully added to your cart!", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      toast.error("Cannot add more items. Stock limit reached!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const handleAddToWishlist = () => {
    if (data.inventory > 0) {
      toast.info("This item is in stock. Please add it to cart instead!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    addToWishlist({
      id: Number(data.id),
      name: data.title,
      price: data.price ?? 0,
      image: urlFor(data.image).url(),
      quantity: 1,
      stock: data.inventory,
    });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="py-12 px-4 sm:px-6 lg:px-8 w-[850px] sm:w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <Image
                src={urlFor(data.image).url()}
                alt={data.title}
                width={400}
                height={400}
                className="rounded-lg object-cover max-w-full h-auto"
              />
            </div>
            <div className="space-y-4 mt-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {data.title}
              </h1>
              <div className="inline-block bg-[#029FAE] text-[#ffffff] px-4 py-2 rounded-full text-lg hover:bg-[#02abaee6]">
                ${(data.price ?? 0).toFixed(2)} USD
              </div>
              <p className="text-gray-600 text-base sm:text-lg">
                {data.description}
              </p>
              <p
                className={`text-sm ${
                  data.inventory > 0 ? "text-[#01AD5A]" : "text-[#F5813F]"
                }`}
              >
                {data.inventory > 0
                  ? `${data.inventory} items in stock`
                  : "Out of stock"}
              </p>
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={data.inventory <= 0}
                  className={`flex-1 py-5 text-[#ffffff] ${
                    data.inventory > 0
                      ? "bg-[#029FAE] hover:bg-[#02abaee6]"
                      : "bg-gray-400"
                  }`}
                >
                  <RiShoppingCartLine className="mr-2 text-[#ffffff]" />
                  Add to Cart
                </Button>
                <Button
                  onClick={handleAddToWishlist}
                  disabled={isInWishlist}
                  className={`flex-1 py-5 text-white ${
                    isInWishlist
                      ? "bg-gray-400"
                      : data.inventory <= 0
                      ? "bg-[#F5813F] hover:bg-[#f5803fdd]"
                      : "bg-[#029FAE] hover:bg-[#02abaee6]"
                  }`}
                >
                  <FaRegHeart className="mr-2" />
                  {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
                </Button>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <ReviewSection currentProductId={Number(data.id)} />
          <FeaturedProducts />
        </div>
      )}
    </>
  );
}
