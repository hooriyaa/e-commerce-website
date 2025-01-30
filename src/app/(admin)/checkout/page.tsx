"use client";
import { useCart } from "@/components/context/CartContext";
import { CartItem } from "@/components/ui/cart-item";
import Link from "next/link";
import CheckoutSummary from "@/components/checkoutPage";


export default function Cart() {
  const { cart, removeFromCart, updateQuantity, moveToWishlist } = useCart();


  if (cart.length === 0) {
    return (
        <div className="flex flex-col sm:flex-row sm:gap-20 items-center justify-center min-h-screen bg-gray-100 px-6 ml-auto w-[890px] sm:w-full pt-3 pb-20">
        {/* Empty Cart Message */}
        <div className="text-center bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some items to your cart to see them here.</p>
          <Link href="/allProducts">
            <button className="bg-[#029FAE] text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-[#027f90] transition-all">
              Continue Shopping
            </button>
          </Link>
        </div>

        {/* Checkout Section */}
        <div className="px-7 py-7 mt-10 w-full  max-w-lg bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Checkout</h2>
          <CheckoutSummary />
        </div>
      </div>

    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 ml-auto w-[890px] sm:w-full pt-16 pb-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Your Shopping Bag</h2>
          <div className="space-y-4">
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

        {/* Checkout Section */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
          <CheckoutSummary />
        </div>
      </div>
    </div>
  );
}
