import { StaticImageData } from "next/image";

export interface Iproduct extends Itoppings {
  category: "pizza" | "drinks";
}

export interface Itoppings {
  id: number;
  name: string;
  img: string | StaticImageData;
  price: number;
}

export interface ICartItem {
  product: Iproduct;
  chosenConfiguration: {
    priceConfiguration: {
      size: string;
    };
    selectedToppings: Itoppings[];
  };
}
