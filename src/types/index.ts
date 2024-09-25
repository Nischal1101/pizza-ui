import { StaticImageData } from "next/image";

export interface Iproducts {
  id: number;
  name: string;
  img: string | StaticImageData;
  price: number;
}
export interface ICartProduct extends Iproducts {
  size: "S" | "M" | "L";
}

export interface Itopping extends Iproducts {}
