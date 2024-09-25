"use client";
import React from "react";
import pizzaMain from "@/assets/img/pizza-main.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CartItem = () => {
  return (
    <>
      <div className="px-5 py-4">
        <div className="flex py-3 justify-between  items-center border-b-2 ">
          <div className="flex gap-4 items-center justify-center">
            <Image
              src={pizzaMain}
              height={70}
              width={70}
              alt="pizza loading"
            ></Image>
            <div>
              <h1 className="font-bold">Peppe pizza</h1>
              <p>Small,Thick</p>
              <p>Cheese</p>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Button
              variant={"outline"}
              className="bg-[#f3f4f6] rounded-3xl px-5 flex gap-4 hover:bg-[#f3f4f6] hover:opacity-75"
            >
              <span
                className="text-xl font-bold"
                onClick={() => {
                  console.log("minus");
                }}
              >
                -
              </span>
              <p>1</p>
              <span
                className="text-xl font-bold"
                onClick={() => {
                  console.log("plus");
                }}
              >
                +
              </span>
            </Button>
          </div>
          <div>Rs.600</div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
