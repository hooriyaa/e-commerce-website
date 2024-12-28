import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TopBar from "@/components/topBar";
import { CartProvider } from "@/components/context/CartContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <CartProvider>
            <div className="max-w-7xl mx-auto max-h-fit">
              <main className="sm:w-full w-[923px] ">
                <TopBar />
              </main>
              <Navbar />
              <Navigation />
              {children}
              <Footer />
              <ToastContainer />
            </div>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
