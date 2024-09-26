"use client";
import { ICartProduct, Iproducts } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";

const AllProductCard = ({ pizzas }: { pizzas: Iproducts[] }) => {
  const [cartListItems, setCartListItems] = React.useState<ICartProduct[]>([]);

  return (
    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
      {pizzas.map((pizza: Iproducts) => (
        <ProductCard obj={pizza} key={pizza.name} />
      ))}
    </div>
  );
};

export default AllProductCard;
