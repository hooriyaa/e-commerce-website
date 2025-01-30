import nodemailer from "nodemailer";

interface OrderDetails {
  fullName: string;
  emailAddress: string;
  items: { name: string; price: number; quantity: number }[];
  total: number;
}

const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

export const sendOrderConfirmationEmail = async (
  email: string,
  orderDetails: OrderDetails
) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for your order!",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #029FAE;">Hello ${orderDetails.fullName},</h2>
        <p>Thank you for shopping with Bandage Online Shopping!</p>
        <p>We're excited to let you know that your order has been successfully placed.</p>
        
        <h3 style="color: #029FAE;">Your Order Details:</h3>
        <ul style="list-style: none; padding: 0;">
          ${orderDetails.items
            .map(
              (item) => `
            <li style="margin-bottom: 10px;">
              <strong>${item.name}</strong> - $${item.price.toFixed(2)} x ${item.quantity}
            </li>
          `
            )
            .join("")}
        </ul>
        <p><strong>Total:</strong> $${orderDetails.total.toFixed(2)}</p>
        
        <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:ukubaid74@gmail.com">ukubaid74@gmail.com</a> or call us at +92-3172077696.</p>
        
        <p>Thank you again for choosing Bandage Online Shopping! We appreciate your trust in us.</p>
        <p>Have a great day!</p>
        
        <p style="font-size: 12px; color: #777;">
          This is an automated email. Please do not reply directly to this message.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Order confirmation email sent successfully.");
  } catch (error) {
    console.error("Error sending order confirmation email:", error);
  }
};