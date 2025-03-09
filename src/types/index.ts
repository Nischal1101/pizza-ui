import { StaticImageData } from "next/image";

export interface Iproduct {
  id: number;
  name: string;
  img: string | StaticImageData;
  category: "pizza" | "drinks";
  price: {
    S: number; // Small size price
    M: number; // Medium size price
    L: number; // Large size price
  };
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
