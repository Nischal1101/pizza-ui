"use client";
import useCartStore from "@/store/store";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShoppingCartNav = () => {
  const { cartItems } = useCartStore();
  return (
    <>
      <div className="relative">
        <Link href={"/cart"}>
          <ShoppingBasket />
        </Link>
        <span className="absolute -top-4 -right-5  size-6 rounded-full text-center bg-primary">
          {cartItems}
        </span>
      </div>
    </>
  );
};

export default ShoppingCartNav;
