"use client";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";

const HamburgerMenu = () => {
    return (
      <div className="block sm:hidden">
        <Sheet>
          {/* Trigger for the hamburger menu */}
          <SheetTrigger className="flex items-center px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
            <MenuIcon className="h-7 w-7 text-gray-700" />
          </SheetTrigger>
  
          {/* Menu content in the sheet */}
          <SheetContent side="left" className=" h-[700px] bg-white shadow-lg">
            <div className="flex flex-col gap-4 p-4">
              <SheetClose asChild>
                <Link href="/" className="hover:text-[#029FAE] cursor-pointer">
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/shop" className="hover:text-[#029FAE] cursor-pointer">
                  Shop
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/allProducts" className="hover:text-[#029FAE] cursor-pointer">
                  Product
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/pages" className="hover:text-[#029FAE] cursor-pointer">
                  Pages
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="hover:text-[#029FAE] cursor-pointer">
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