"use client";
import Link from "next/link";
import { useState } from "react";

const SuccessPage = () => {
  const [loading, setLading] = useState(false);
  
   // Call the update-inventory API
  const handleCheckout = async () => {
    setLading(true); // Set loading state
    try {
      const cartItems: { id: number; price: number; quantity: number }[] =
        JSON.parse(localStorage.getItem("cart") || "[]");

      // Call the update-inventory API
      const inventoryResponse = await fetch("/api/update-inventory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!inventoryResponse.ok) {
        const errorData = await inventoryResponse.json();
        throw new Error(errorData.message || "Inventory update failed.");
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
    <section className="flex items-center justify-center pb-32 pt-24 bg-gray-50 mx-w-7xl mx-auto w-[890px] sm:w-full px-9">
      <div className="max-w-3xl text-center bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#029FAE] mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your payment. Your transaction was completed
          successfully, and you can now enjoy our services.
        </p>
        <Link href={"/shipment"}>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="px-6 py-3 w-full  transition-colors disabled:bg-[#7BD3EA] bg-[#029FAE] text-white font-medium rounded-lg hover:bg-[#02a0aebd]"
          >
            {loading ? "Processing..." : " Generate Tracking Number"}
          </button>
        </Link>
      </div>
    </section>

  );
};

export default SuccessPage;
