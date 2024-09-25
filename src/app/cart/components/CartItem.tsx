"use client";
import React from "react";
import pizzaMain from "@/assets/img/pizza-main.png";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const CartItem = () => {
  return (
    <>
      <div className="px-2 md:px-3 lg:px-5 py-3 lg:py-4">
        <div className="flex py-2 lg:py-3 justify-between  items-center border-b-2 ">
          <div className="flex gap-2 md:gap-3 lg:gap-4 items-center justify-center">
            <Image
              src={pizzaMain}
              alt="pizza loading"
              className="h-[60px] w-[60px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] object-cover"
            ></Image>
            <div>
              <h1 className="font-bold">Peppe pizza</h1>
              <p>Small,Thick</p>
              <p>Cheese</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-1">
              <Button
                variant={"outline"}
                className="bg-[#f3f4f6] rounded-3xl px-2 md:px-3 lg:px-5 flex gap-2 lg:gap-4 hover:bg-[#f3f4f6] hover:opacity-75"
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
              <Button variant={"ghost"} className="md:hidden">
                <X size={18} />
              </Button>
            </div>
            <p className="md:hidden font-bold text-dark">Rs 600</p>
          </div>
          <div className="hidden md:flex items-center gap-1">
            Rs.600{" "}
            <Button variant={"ghost"}>
              <X size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;