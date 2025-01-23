"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "./context/CartContext";
import { SignInButton, useUser } from "@clerk/nextjs";
import { loadStripe } from "@stripe/stripe-js";

const OrderSummary = () => {
  const { isSignedIn } = useUser();
  const { totalPrice } = useCart();
  const [loading, setLading] = useState(false);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  const handleCheckout = async () => {
    setLading(true); // Set loading state
    try {
      const cartItems: { id: number; price: number; quantity: number }[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );
  
      // Call the Stripe checkout session API
      const sessionResponse = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
  
      if (!sessionResponse.ok) {
        const errorData = await sessionResponse.json();
        throw new Error(errorData.error || "Failed to create Stripe session.");
      }
  
      const session = await sessionResponse.json();
      const stripe = await stripePromise;
  
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Stripe failed to load.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setLading(false); // Reset loading state
    }
  }; 

  return (
    <div className="px-6 py-7 bg-white rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-[#111111]">Subtotal</span>
          <span className="font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between gap-10">
          <span className="text-[#111111]">Estimated Delivery & Handling</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="border-t my-4"></div>
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="border-t my-4"></div>
        {!isSignedIn ? (
          <div>
            <SignInButton mode="modal">
              <Button className="mt-6 w-full bg-[#029FAE] text-white py-6 rounded-3xl text-lg font-medium hover:bg-[#02abaee6]">
               Checkout
              </Button>
            </SignInButton>
          </div>
        ) : (
          <div>
            <Button
              onClick={handleCheckout}
              disabled={loading}
              className="mt-6 w-full bg-[#029FAE] text-[#ffffff] py-6 rounded-3xl text-lg font-medium hover:bg-[#02abaee6]"
            >
              {loading ? "Processing..." : "Checkout"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
