"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ICartItem } from "@/types";
import useCartStore from "@/store/store";
import { Iprice } from "../page";

interface CartItemProps {
  product: ICartItem;
  prices: Iprice[];
  setPrices: React.Dispatch<React.SetStateAction<Iprice[]>>;
}

const CartItem = ({ product, prices, setPrices }: CartItemProps) => {
  const [itemNumber, setItemNumber] = React.useState(1);
  const { removeCartItem } = useCartStore();

  // Calculate the total price of toppings
  const myToppingPrice = () => {
    return (
      product.chosenConfiguration.selectedToppings?.reduce(
        (acc, item) => acc + item.price,
        0
      ) || 0
    );
  };

  // Update the total price whenever the quantity or toppings change
  useEffect(() => {
    const basePrice =
      product.product.price[
        product.chosenConfiguration.priceConfiguration
          .size as keyof typeof product.product.price
      ];
    const toppingsPrice = myToppingPrice();
    const totalPrice = itemNumber * (basePrice + toppingsPrice); // Multiply by itemNumber

    setPrices((prev) => {
      const existingProductIndex = prev.findIndex(
        (priceItem) => priceItem.productId === product.product.id
      );

      if (existingProductIndex !== -1) {
        // Update the existing product's price
        const updatedPrices = [...prev];
        updatedPrices[existingProductIndex].price = totalPrice;
        return updatedPrices;
      } else {
        // Add the new product's price
        return [
          ...prev,
          {
            price: totalPrice,
            productId: product.product.id,
          },
        ];
      }
    });
  }, [itemNumber, product.chosenConfiguration.selectedToppings, setPrices]);

  // Remove the product's price from the prices list
  const removePrice = (productId: number) => {
    setPrices((prev) =>
      prev.filter((priceItem) => priceItem.productId !== productId)
    );
  };

  return (
    <div className="px-2 md:px-3 lg:px-5 py-3 lg:py-4">
      <div className="flex py-2 lg:py-3 justify-between items-center border-b-2">
        {/* Product Image and Details */}
        <div className="flex gap-2 md:gap-3 lg:gap-4 items-center justify-left w-1/3">
          <Image
            src={product.product.img}
            alt="pizza loading"
            className="h-[60px] w-[60px] md:h-[60px] md:w-[60px] lg:h-[70px] lg:w-[70px] object-cover"
          />
          <div>
            <h1 className="font-bold">{product.product.name}</h1>
            <p>{product.chosenConfiguration.priceConfiguration.size}</p>
            {product.chosenConfiguration.selectedToppings?.map(
              (topping, index) => (
                <p key={index}>{topping.name}</p>
              )
            )}
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex flex-col items-left justify-center gap-2">
          <div className="flex items-center justify-center gap-1">
            <Button
              variant={"outline"}
              className="bg-[#f3f4f6] rounded-3xl px-2 md:px-3 lg:px-5 flex gap-2 lg:gap-4 hover:bg-[#f3f4f6] hover:opacity-75"
            >
              <span
                className="text-2xl font-bold px-3 py-4"
                onClick={() => setItemNumber((prev) => Math.max(1, prev - 1))}
              >
                -
              </span>
              <p>{itemNumber}</p>
              <span
                className="text-2xl font-bold px-3 py-4"
                onClick={() => setItemNumber((prev) => Math.min(prev + 1, 10))}
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
          {/* Mobile Price Display */}
          <div className="md:hidden font-bold text-dark w-4">
            <p className="w-20 ml-3 text-muted-foreground">
              Rs{" "}
              {itemNumber *
                (product.product.price[
                  product.chosenConfiguration.priceConfiguration
                    .size as keyof typeof product.product.price
                ] +
                  myToppingPrice())}
            </p>
          </div>
        </div>

        {/* Desktop Price Display and Remove Button */}
        <div className="hidden md:flex items-center gap-1">
          <p className="w-20 text-muted-foreground">
            Rs{" "}
            {itemNumber *
              (product.product.price[
                product.chosenConfiguration.priceConfiguration
                  .size as keyof typeof product.product.price
              ] +
                myToppingPrice())}
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
  );
};

export default CartItem;
