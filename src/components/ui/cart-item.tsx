"use client";

import Image from "next/image";
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { CartItem as CartItemType } from "@/types/cart";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onMoveToWishlist: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

export function CartItem({ item, onRemove, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="flex items-center justify-between border-b pb-6 gap-7">
      <div className="flex items-center space-x-4">
        <Image
          src={(item.image)} 
          alt={item.name}
          className="w-20 h-20 object-cover rounded"
          width={400}
          height={400}
        />
        <div>
          <h3 className="text-lg text-[#272343] font-normal">{item.name}</h3>
          {item.color && (
            <p className="text-sm text-[#757575] font-normal mt-5">
              {item.color}
            </p>
          )}
          {item.size && (
            <p className="text-sm text-[#757575] font-normal">
              Size: {item.size}
            </p>
          )}
          <div className="flex gap-3 p-2">
            <button className="text-[#757575] hover:text-[#029FAE] transition-colors">
              <FaRegHeart className="w-5 h-5" />
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="text-[#757575] hover:text-red-500 transition-colors"
            >
              <FaRegTrashAlt className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-9 mr-5">
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
            }
            disabled={item.quantity <= 1} // Disable if quantity is already 1
            className="hover:bg-gray-100 disabled:opacity-50"
          >
            <Minus className="h-4 w-4 text-[#272343]" />
          </Button>

          {/* Quantity Display */}
          <span className="w-8 text-center">{item.quantity}</span>

          {/* Plus Button */}
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              onUpdateQuantity(item.id, Math.min(50, item.quantity + 1))
            }
            className="hover:bg-gray-100"
          >
            <Plus className="h-4 w-4 text-[#272343]" />
          </Button>
        </div>
      </div>
      <p className="text-base font-normal text-[#111111] pr-10">
        ${(item.price * item.quantity).toFixed(2)}
      </p>
    </div>
  );
}
