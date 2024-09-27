"use client";

import React from "react";
import { ShoppingBasket } from "lucide-react";
import { PizzaSize, Toppings } from "@/components";
import { toppings } from "../list/toppingslist";
import Image from "next/image";
import { Button } from "../ui/button";
import { DialogClose } from "../ui/dialog";
import useCartStore from "@/store/store";
import { Iproduct, Itoppings } from "@/types";

const TopingsModal = ({ selectedProduct }: { selectedProduct: Iproduct }) => {
  const [pizzaSize, setPizzaSize] = React.useState<"S" | "M" | "L">("S");
  const { setCartItems } = useCartStore();
  const [checked, setChecked] = React.useState<number[]>([]);
  const [selectedToppings, setSelectedToppings] = React.useState<Itoppings[]>(
    []
  );
  const handleAddToCart = () => {
    const res = toppings.filter((topping) => checked.includes(topping.id));
    setSelectedToppings(res);
    setCartItems({
      product: selectedProduct,
      chosenConfiguration: {
        priceConfiguration: {
          size: pizzaSize,
        },
        selectedToppings: selectedToppings,
      },
    });
  };

  return (
    <>
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center justify-center left w-1/3 bg-white h-full">
          <Image
            src={selectedProduct.img}
            width={150}
            height={150}
            alt="pizza is loading"
          />
        </div>
        <div className="w-2/3 py-6 px-4">
          <h1 className="font-semibold text-2xl">{selectedProduct.name}</h1>
          <p className="text-muted-foreground mt-2">
            Juicy chicken fillet and crispy bacon combined with signature tomato
            sauce, Mozzarella and onions
          </p>
          <PizzaSize pizzaSize={pizzaSize} setPizzaSize={setPizzaSize} />
          <h1 className="mt-8">Extra Toppings</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
            {toppings.map((ele: Itoppings) => (
              <Toppings
                key={ele.id}
                topping={ele}
                checked={checked}
                setChecked={setChecked}
              />
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <p className="font-bold">RS {selectedProduct.price}</p>
            <DialogClose asChild>
              <Button
                className="flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <span className="mr-2">
                  <ShoppingBasket />
                </span>
                Add to Cart &rarr;
              </Button>
            </DialogClose>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopingsModal;
