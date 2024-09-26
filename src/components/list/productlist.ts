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
    price: 500,
  },
  {
    id: 2,
    name: "OrangeJuice",
    category: "drinks",
    img: OrangeJuice,
    price: 500,
  },
  {
    id: 3,
    name: "Pepsi",
    category: "drinks",
    img: Pepsi,
    price: 40,
  },
  {
    id: 4,
    name: "Cocacola",
    category: "drinks",
    img: Cocacola,
    price: 4000,
  },
  {
    id: 5,
    name: "OrangeJuice",
    category: "drinks",
    img: OrangeJuice,
    price: 200,
  },
  {
    id: 6,
    category: "drinks",
    name: "Water",
    img: Water,
    price: 1000,
  },
  {
    id: 7,
    name: "Pepsi",
    img: Pepsi,
    category: "drinks",
    price: 100,
  },
  {
    id: 8,
    name: "Tropicana",
    category: "drinks",
    img: Tropicana,
    price: 580,
  },
  {
    id: 9,
    name: "Cheese",
    img: cheese,
    price: 300,
    category: "pizza",
  },
  {
    id: 10,
    name: "Pepproni",
    img: pepproni,
    price: 500,
    category: "pizza",
  },
  {
    id: 11,
    category: "pizza",
    name: "Margarita",
    img: margarita,
    price: 600,
  },
  {
    id: 12,
    name: "Margarita",
    img: margarita,
    price: 200,
    category: "pizza",
  },

  {
    id: 13,
    name: "Cheese",
    img: cheese,
    price: 500,
    category: "pizza",
  },

  {
    id: 14,
    name: "Pepproni",
    img: pepproni,
    price: 1000,
    category: "pizza",
  },
  {
    id: 15,
    name: "Cheese",
    img: cheese,
    price: 500,
    category: "pizza",
  },
  {
    id: 16,
    name: "Margarita",
    img: margarita,
    price: 520,
    category: "pizza",
  },
];
