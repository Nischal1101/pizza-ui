"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/types";
import useCartStore from "@/store/store";
import { Iprice } from "../page";

const CartItem = ({
  product,
  setPrices,
}: {
  product: ICartItem;
  prices: Iprice[];
  setPrices: React.Dispatch<React.SetStateAction<Iprice[]>>;
}) => {
  const [itemNumber, setItemNumber] = React.useState(1);
  const { removeCartItem, cartItems } = useCartStore();
  const removePrice = (productId: number) => {
    setPrices((prev) =>
      prev.filter((priceItem) => priceItem.productId !== productId)
    );
  };
  useEffect(() => {
    setPrices((prev) => {
      const existingProductIndex = prev.findIndex(
        (priceItem) => priceItem.productId === product.product.id
      );

      if (existingProductIndex !== -1) {
        // Update the existing product's price
        const updatedPrices = [...prev];
        updatedPrices[existingProductIndex].price =
          itemNumber * product.product.price;
        return updatedPrices;
      } else {
        // Add the new product's price
        return [
          ...prev,
          {
            price: itemNumber * product.product.price,
            productId: product.product.id,
          },
        ];
      }
    });
  }, [itemNumber, setPrices]);

  return (
    <>
      <div className="px-2 md:px-3 lg:px-5 py-3 lg:py-4">
        <div className="flex py-2 lg:py-3 justify-between  items-center border-b-2 ">
          <div className="flex gap-2 md:gap-3 lg:gap-4 items-center justify-left w-1/3">
            <Image
              src={product.product.img}
              alt="pizza loading"
              className="h-[60px] w-[60px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] object-cover"
            ></Image>
            <div>
              <h1 className="font-bold">{product.product.name}</h1>
              <p>{product.chosenConfiguration.priceConfiguration.size}</p>
              <p>{product.chosenConfiguration.selectedToppings[0]?.name}</p>
              <p>{product.chosenConfiguration.selectedToppings[1]?.name}</p>
              <p>{product.chosenConfiguration.selectedToppings[2]?.name}</p>
              <p>{product.chosenConfiguration.selectedToppings[3]?.name}</p>
            </div>
          </div>
          <div className="flex flex-col items-left justify-center gap-2 ">
            <div className="flex items-center justify-center gap-1">
              <Button
                variant={"outline"}
                className="bg-[#f3f4f6] rounded-3xl px-2 md:px-3 lg:px-5 flex gap-2 lg:gap-4 hover:bg-[#f3f4f6] hover:opacity-75"
              >
                <span
                  className="text-2xl font-bold px-3 py-4"
                  onClick={() => {
                    setItemNumber((prev) => Math.max(0, prev - 1));
                  }}
                >
                  -
                </span>
                <p>{itemNumber}</p>
                <span
                  className="text-2xl font-bold px-3 py-4"
                  onClick={() => {
                    setItemNumber((prev) => Math.min(prev + 1, 10));
                  }}
                >
                  +
                </span>
              </Button>
              <Button
                variant={"ghost"}
                className="md:hidden p-0"
                onClick={() => {
                  removeCartItem(product.product.id);
                  removePrice(product.product.id);
                }}
              >
                <X size={18} />
              </Button>
            </div>
            <div className="md:hidden font-bold text-dark w-4">
              <p className="w-20 ml-3 text-muted-foreground">
                Rs {itemNumber * product.product.price}
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1  ">
            <p className="w-20 text-muted-foreground">
              Rs {itemNumber * product.product.price}
            </p>
            <Button
              variant={"ghost"}
              className="p-0"
              onClick={() => {
                removeCartItem(product.product.id);

                removePrice(product.product.id);
              }}
            >
              <X size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
