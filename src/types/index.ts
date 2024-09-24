import { StaticImageData } from "next/image";

export interface Iproducts {
  id: number;
  name: string;
  img: string | StaticImageData;
  price: number;
}

export interface Itopping extends Iproducts {}
