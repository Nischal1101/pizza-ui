import AppleJuice from "@/assets/img/apple-juice.jpg";
import OrangeJuice from "@/assets/img/orange-juice.jpg";
import Cocacola from "@/assets/img/cocacola.jpg";
import Pepsi from "@/assets/img/pepsi.jpg";
import Water from "@/assets/img/water.jpg";
import Tropicana from "@/assets/img/tropicana.jpg";

import cheese from "@/assets/img/cheese.jpg";
import pepproni from "@/assets/img/pepproni.jpg";
import margarita from "@/assets/img/margarita.jpg";

import { Iproduct } from "@/types";

export const products: Iproduct[] = [
  {
    id: 1,
    name: "AppleJuice",
    category: "drinks",
    img: AppleJuice,
    price: {
      S: 500, // Small size price
      M: 700, // Medium size price
      L: 900, // Large size price
    },
  },
  {
    id: 2,
    name: "OrangeJuice",
    category: "drinks",
    img: OrangeJuice,
    price: {
      S: 500,
      M: 700,
      L: 900,
    },
  },
  {
    id: 9,
    name: "Cheese",
    img: cheese,
    category: "pizza",
    price: {
      S: 300,
      M: 500,
      L: 700,
    },
  },
  {
    id: 10,
    name: "Pepproni",
    img: pepproni,
    category: "pizza",
    price: {
      S: 500,
      M: 700,
      L: 900,
    },
  },
  // Add other products similarly...
];
