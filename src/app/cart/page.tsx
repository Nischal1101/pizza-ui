"use client";
import { Card } from "@/components/ui/card";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import CartItem from "./components/CartItem";
import useCartStore from "@/store/store";

const cartPage = () => {
  const { cartItems } = useCartStore();
  useEffect(() => {}, [cartItems]);
  if (!cartItems) {
    return <div>Empty cart</div>;
  }
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <section className="w-[90%] md:w-[60%] lg:w-1/2">
          <h1 className="font-bold my-8">Shopping Cart</h1>
          <Card>
            {cartItems.map((ele) => (
              <CartItem product={ele} key={ele.product.id} />
            ))}
            <div className="flex items-center justify-between px-5 py-4">
              <h1 className="font-bold">Rs 1800</h1>
              <Button>Continue &rarr;</Button>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default cartPage;
