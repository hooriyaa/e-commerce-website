"use client";
import React from "react";
import { Button } from "./ui/button";
import { useCart } from "./context/CartContext";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";


const OrderSummary = () => {
  const { isSignedIn } = useUser();
  const { totalPrice } = useCart();

  return (
    <div className="px-6 py-5 bg-white rounded-lg shadow-lg">
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
            <Link href="/checkout">
            <Button
              className="mt-6 w-full bg-[#029FAE] text-[#ffffff] py-6 rounded-3xl text-lg font-medium hover:bg-[#02abaee6]"
            >
              Checkout
            </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
