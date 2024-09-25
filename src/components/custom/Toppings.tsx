"use client";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Itopping } from "@/types";

const toppings = ({ topping }: { topping: Itopping }) => {
  const [checked, setChecked] = React.useState<number[]>([]);
  const isChecked = checked.includes(topping.id);
  return (
    <>
      <Card
        className={`${isChecked && "border border-primary"} p-2 relative my-8`}
        onClick={() => {
          checked.includes(topping.id)
            ? setChecked(checked.filter(id=>id !== topping.id))
            : setChecked([...checked, topping.id]);
        }}
      >
        <Image
          src={topping.img}
          alt="toppings loading"
          height={40}
          width={40}
        />
        <h1 className="mt-4">{topping.name}</h1>
        <p>Rs {topping.price} </p>
        <CircleCheck className="text-primary absolute top-2 right-2" />
      </Card>
    </>
  );
};

export default toppings;
