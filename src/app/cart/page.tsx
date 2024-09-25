import { Card } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import CartItem from "./components/CartItem";
import { cartProduct } from "@/components/list/cartProduct";
const cartPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <section className="w-[90%] md:w-[60%] lg:w-1/2">
          <h1 className="font-bold my-8">Shopping Cart</h1>
          <Card>
            {cartProduct.map((ele) => (
              <CartItem product={ele} key={ele.id} />
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
