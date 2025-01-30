// pages/api/placeOrder.ts
import { sendOrderConfirmationEmail } from "@/lib/emailService";
import { NextApiRequest, NextApiResponse } from "next";

interface OrderData {
  fullName: string;
  emailAddress: string;
  shippingAddress: string;
  phoneNumber: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const orderData: OrderData = req.body;

    try {
      // Send order confirmation email
      await sendOrderConfirmationEmail(orderData.emailAddress, orderData);

      res.status(200).json({ message: "Order placed successfully!" });
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).json({ message: "Failed to place order." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}