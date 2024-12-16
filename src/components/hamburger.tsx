"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";

const HamburgerMenu = () => {
    return (
      <div className="block sm:hidden">
        <Sheet>
          {/* Trigger for the hamburger menu */}
          <SheetTrigger className="flex items-center px-3 py-2 rounded-md">
            <MenuIcon className="h-7 w-7 text-gray-700" />
          </SheetTrigger>
  
          {/* Menu content in the sheet */}
          <SheetContent side="top" className="max-h-96 text-black shadow-lg">
            <div className="flex flex-col gap-5 p-12">
              <SheetClose asChild>
                <Link href="/" className="hover:text-[#029FAE] cursor-pointer text-2xl">
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/shop" className="hover:text-[#029FAE] cursor-pointer text-2xl">
                  Shop
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/allProducts" className="hover:text-[#029FAE] cursor-pointer text-2xl">
                  Product
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/pages" className="hover:text-[#029FAE] cursor-pointer text-2xl">
                  Pages
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="hover:text-[#029FAE] cursor-pointer text-2xl">
                  About
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  };
  
  export default HamburgerMenu;