import React from 'react'
import { Button } from './ui/button'
import { useCart } from './context/CartContext';

const OrderSummary = () => {
    const {totalPrice } =
    useCart();
  return (
    <div className="px-6 bg-white rounded-lg shadow-sm">
    <h2 className="text-2xl font-semibold mb-6">Summary</h2>
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-[#111111]">Subtotal</span>
        <span className="font-medium">${totalPrice.toFixed(2)}</span>
      </div>
      <div className="flex justify-between gap-10">
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
  )
}

export default OrderSummary
