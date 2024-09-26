import cheese from "@/assets/img/cheese.jpg";
import pepproni from "@/assets/img/pepproni.jpg";
import margarita from "@/assets/img/margarita.jpg";
import { Iproducts } from "@/types";

export const pizzas: Iproducts[] = [
  {
    id: 1,
    name: "Cheese",
    img: cheese,
    price: 300,
    size: "S",
  },
  {
    id: 2,
    name: "Pepproni",
    img: pepproni,
    price: 500,
    size: "M",
  },
  {
    id: 3,
    name: "Margarita",
    img: margarita,
    price: 600,
    size: "L",
  },
  {
    id: 4,
    name: "Margarita",
    img: margarita,
    price: 200,
    size: "S",
  },

  {
    id: 5,
    name: "Cheese",
    img: cheese,
    price: 500,
    size: "M",
  },

  {
    id: 6,
    name: "Pepproni",
    img: pepproni,
    price: 1000,
    size: "L",
  },
  {
    id: 7,
    name: "Cheese",
    img: cheese,
    price: 500,
    size: "M",
  },
  {
    id: 8,
    name: "Margarita",
    img: margarita,
    price: 520,
    size: "M",
  },
];
