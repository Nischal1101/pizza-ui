"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import CartItem from "./components/CartItem";
import useCartStore from "@/store/store";
export interface Iprice {
  productId: number;
  price: number;
}
const cartPage = () => {
  const { cartItems } = useCartStore();
  console.log(cartItems);
  const [prices, setPrices] = React.useState<Iprice[]>([]);
  if (cartItems.length == 0) {
    return (
      <div className="text-center mt-24 text-2xl md:text-4xl">Empty cart</div>
    );
  }
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <section className="w-[90%] md:w-[60%] lg:w-1/2">
          <h1 className="font-bold my-8">Shopping Cart</h1>
          <Card>
            {cartItems.map((ele) => (
              <CartItem
                product={ele}
                key={ele.product.id}
                prices={prices}
                setPrices={setPrices}
              />
            ))}
            <div className="flex items-center justify-between px-5 py-4">
              <h1 className="font-bold">
                Rs{" "}
                {prices.length &&
                  prices.reduce((acc, item) => acc + item.price, 0)}
              </h1>
              <Button>Continue &rarr;</Button>
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

export default cartPage;
