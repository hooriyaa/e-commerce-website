"use client";
import { useCart } from "@/components/context/CartContext";
import { useState, ChangeEvent } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

interface OrderDetails {
  fullName: string;
  emailAddress: string;
  shippingAddress: string;
  phoneNumber: string;
}


const CheckoutSummary = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  const { cart } = useCart();
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    fullName: "",
    emailAddress: "",
    shippingAddress: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleCheckout = async () => {
    setLoading(true);

    // Validate order details
    const { fullName, emailAddress, shippingAddress, phoneNumber } =
      orderDetails;
    if (!fullName || !emailAddress || !shippingAddress || !phoneNumber) {
      toast.error("Please fill in all required fields before proceeding.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
      return;
    }

    const cartItems = cart.map((item) => ({
      id: item.id,
      price: item.price,
      quantity: item.quantity,
    }));

    const orderData = {
      ...orderDetails,
      items: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
      })),
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    };

    try {
      const [orderResponse, sessionResponse] = await Promise.all([
        fetch("/api/placeOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }),
        fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cartItems }),
        }),
      ]);

      if (!orderResponse.ok || !sessionResponse.ok) {
        const errorOrderData = orderResponse.ok
          ? null
          : await orderResponse.json();
        const errorSessionData = sessionResponse.ok
          ? null
          : await sessionResponse.json();
        throw new Error(
          errorOrderData?.message ||
            errorSessionData?.error ||
            "Failed to complete the checkout."
        );
      }

      const session = await sessionResponse.json();
      const stripe = await stripePromise;

      // Send email before Stripe redirect
      const itemsList = cart
        .map(
          (item) =>
            `<li>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</li>`
        )
        .join("");
      const emailResponse = await fetch("/api/send-Email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email: emailAddress,
          itemsList: itemsList,
          totalPrice: orderData.total,
        }),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        throw new Error(errorData.message || "Failed to send email.");
      }

      console.log("Email sent successfully!");

      // Redirect to Stripe checkout
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: session.id });
      } else {
        console.error("Stripe failed to load.");
      }

      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      alert(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4">
      {Object.keys(orderDetails).map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 capitalize">
            {field.replace(/([A-Z])/g, " $1").trim()}
          </label>
          <input
            type={field === "emailAddress" ? "email" : "text"}
            name={field}
            value={orderDetails[field as keyof typeof orderDetails]}
            onChange={handleInputChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#3fb9c4] focus:outline-none"
            required
          />
        </div>
      ))}
      <button
        type="button"
        onClick={handleCheckout}
        className="w-full bg-[#029FAE] text-white py-3 rounded-lg font-semibold hover:bg-[#027f90] transition-all"
        disabled={loading}
      >
        {loading ? "Processing..." : "Place Order"}
      </button>
    </form>
  );
};

export default CheckoutSummary;