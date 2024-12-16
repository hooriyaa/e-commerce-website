"use client";
import { useCart } from "@/components/context/CartContext";
import OrderSummary from "@/components/orderSummary";
import { CartItem } from "@/components/ui/cart-item";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, moveToWishlist } = useCart();

  if (cart.length === 0) {
    return (
      <main className="flex justify-around ml-auto w-[890px] sm:w-full  pt-16">
        <div className="min-h-screen flex flex-col items-center mt-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600">
            Add some items to your cart to see them here.
          </p>
          <button className="bg-[#029FAE] text-white lg:text-base duration-300 scroll-m-20 px-8 mt-5 rounded-3xl text-lg font-medium hover:bg-[#02a0aebd] py-4">
            <Link href={"/allProducts"}>Continue Shopping</Link>
          </button>
        </div>
        {/* Summary Section */}
        <OrderSummary />
      </main>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gray-50 flex justify-center pt-10 text-[Inter] w-[890px] lg:w-full">
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
            <OrderSummary />
          </div>
        </main>
      </section>
    </>
  );
}
