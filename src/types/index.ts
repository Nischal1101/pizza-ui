import { StaticImageData } from "next/image";

export interface Iproducts {
  name: string;
  img: string | StaticImageData;
  price: number;
}
