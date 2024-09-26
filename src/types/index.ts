import { StaticImageData } from "next/image";

export interface Iproducts {
  id: number;
  name: string;
  img: string | StaticImageData;
  price: number;
  size: "S" | "M" | "L";
}
export interface ICartProduct extends Iproducts {
  toppings: {
    name: string;
    price: number;
  }[];
}

export interface Itopping extends Iproducts {}
