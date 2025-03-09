"use client";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Itoppings } from "@/types";

const Toppings = ({
  topping,
  selectedToppings,
  handleCheckBoxCheck,
}: {
  topping: Itoppings;
  selectedToppings: Itoppings[];
  handleCheckBoxCheck: (topping: Itoppings) => void;
}) => {
  const isCurrentSelected = selectedToppings.some(
    (element) => element.id === topping.id
  );

  return (
    <Card
      className={`p-2 relative cursor-pointer ${
        isCurrentSelected ? "border border-primary" : ""
      }`}
      onClick={() => handleCheckBoxCheck(topping)}
    >
      <Image src={topping.img} alt="toppings loading" height={40} width={40} />
      <h1 className="mt-4">{topping.name}</h1>
      <p>Rs {topping.price}</p>
      {isCurrentSelected && (
        <CircleCheck className="text-primary absolute top-2 right-2" />
      )}
    </Card>
  );
};

export default Toppings;
