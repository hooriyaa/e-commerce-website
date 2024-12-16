"use client";

import { useCart } from "@/components/context/CartContext";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/ui/cart-item";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, moveToWishlist, totalPrice } =
    useCart();

  if (cart.length === 0) {
    return (
      <main className="flex justify-around ml-auto w-[890px] sm:w-full  ">
        <div className="min-h-screen flex flex-col items-center mt-28">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600">
            Add some items to your cart to see them here.
          </p>
          <button className="bg-[#029FAE] text-white lg:text-base duration-300 scroll-m-20 px-8 mt-5 rounded-3xl text-lg font-medium hover:bg-[#02a0aebd] py-4">
            <Link href={"/allProducts"}>Continue Shopping</Link>
          </button>
        </div>
        {/* Summary Section */}
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-[#111111]">Subtotal</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#111111]">
                Estimated Delivery & Handling
              </span>
              <span className="font-medium ml-5">Free</span>
            </div>
            <div className="border-t my-4"></div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="border-t my-4"></div>
          </div>
          <Button className="mt-6 w-full bg-[#029FAE] text-white py-6 rounded-3xl text-lg font-medium hover:bg-[#02a0aebd]">
            Member Checkout
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gray-50 flex justify-center py-10 text-[Inter] w-[890px] lg:w-full">
        <main className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Bag Section */}
            <div className="col-span-2">
              <h2 className="text-2xl font-medium mb-6 text-[#111111]">Bag</h2>
              <div className="space-y-6">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onMoveToWishlist={moveToWishlist}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
            </div>

            {/* Summary Section */}
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[#111111]">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#111111]">
                    Estimated Delivery & Handling
                  </span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t my-4"></div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="border-t my-4"></div>
              </div>
              <Button className="mt-6 w-full bg-[#029FAE] text-white py-6 rounded-3xl text-lg font-medium hover:bg-[#02a0aebd]">
                Member Checkout
              </Button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
