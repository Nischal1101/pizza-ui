"use client";
import { ICartItem, Iproduct } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

const AllProductCard = ({ pizzas }: { pizzas: Iproduct[] }) => {
  const [cartListItems, setCartListItems] = React.useState<ICartItem[]>([]);

  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
      {pizzas.map((pizza: Iproduct) => (
        <ProductCard obj={pizza} key={pizza.name} />
      ))}
    </div>
  );
};

export default AllProductCard;
