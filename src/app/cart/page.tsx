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

const CartPage = () => {
  const { cartItems } = useCartStore();
  const [prices, setPrices] = React.useState<Iprice[]>([]);

  // Calculate the total price of all items in the cart
  const totalPrice = prices.reduce((acc, item) => acc + item.price, 0);

  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-24 text-2xl md:text-4xl">
        Your cart is empty
      </div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="w-[90%] md:w-[60%] lg:w-1/2">
        <h1 className="font-bold my-8 text-2xl">Shopping Cart</h1>
        <Card>
          {/* Render each cart item */}
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item}
              prices={prices} // Pass the prices prop
              setPrices={setPrices}
            />
          ))}
          {/* Display the total price and continue button */}
          <div className="flex items-center justify-between px-5 py-4 border-t">
            <h1 className="font-bold text-lg">Total: Rs {totalPrice}</h1>
            <Button className="bg-primary hover:bg-primary/90">
              Continue &rarr;
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
};

export default CartPage;
