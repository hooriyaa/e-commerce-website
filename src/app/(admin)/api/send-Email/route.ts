
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface EmailRequestBody {
  name: string;
  email: string;
  itemsList: string;
  totalPrice: number;
}

// POST handler for sending email
export async function POST(request: Request) {
  try {
    const { name, email, itemsList, totalPrice }: EmailRequestBody =
      await request.json();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Comforty Online Store" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🎉 Thank You for Shopping with Comforty! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <h1 style="color: #029FAE;">Hi ${name},</h1>
          <p>We are thrilled to have you as part of the <strong>Comforty family</strong>! 🛍️</p>
          <p>Your order has been successfully placed, and we are already working hard to get it ready for you. 🚀</p>
          
          <h2 style="color: #029FAE; border-bottom: 2px solid #029FAE; padding-bottom: 5px;">📦 Order Summary:</h2>
          <ul style="list-style-type: none; padding: 0;">
            ${itemsList}
          </ul>
          <p style="font-size: 18px;"><strong>💵 Total Amount: $${totalPrice.toFixed(2)}</strong></p>
    
          <p>Your order is on its way and will be with you soon! We hope it brings a smile to your face. 😊</p>
          <p>If you have any questions or need assistance, our friendly support team is here to help. Reach out to us at <a href="mailto:guujarmahnoor0312@gmail.com" style="color: #029FAE; text-decoration: none;">guujarmahnoor0312@gmail.com</a>.</p>
    
          <p>Thank you for trusting <strong>Comforty Online Store</strong> with your purchase. We are committed to making your shopping experience as comfortable and enjoyable as possible. ❤️</p>
          <p>Wishing you a fantastic day ahead!✨</p>
    
          <div style="margin-top: 30px; text-align: center;">
            <p style="font-size: 16px; color: #029FAE; margin-bottom: 10px;">Let's stay connected!</p>
            <a href="https://www.linkedin.com/in/hooriya-muhammad-fareed-57a320302/" style="display: inline-block; background-color: #0077B5; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-size: 14px;">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn Icon" style="width: 20px; vertical-align: middle; margin-right: 8px;">
              Connect with me on LinkedIn
            </a>
          </div>
    
          <p style="font-size: 12px; color: #777; margin-top: 20px;">
            This is an automated email. Please do not reply directly to this message.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}

