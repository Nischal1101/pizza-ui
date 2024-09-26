import cheese from "@/assets/img/cheese.jpg";
import pepproni from "@/assets/img/pepproni.jpg";
import margarita from "@/assets/img/margarita.jpg";
import { ICartProduct } from "@/types";

export const cartProduct: ICartProduct[] = [
  {
    id: 1,
    name: "Cheese",
    img: cheese,
    price: 500,
    size: "S",
    toppings: [
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
    ],
  },
  {
    id: 2,
    name: "Pepproni",
    img: pepproni,
    price: 500,
    size: "S",
    toppings: [
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
    ],
  },
  {
    id: 3,
    name: "Margarita",
    img: margarita,
    price: 40,
    size: "L",
    toppings: [
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
      {
        name: "cheese",
        price: 200,
      },
    ],
  },
];
