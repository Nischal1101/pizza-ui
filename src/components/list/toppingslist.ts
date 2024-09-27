import cheese from "@/assets/img/cheese.png";
import chicken from "@/assets/img/chicken.png";
import jelapeno from "@/assets/img/jelapeno.png";
import mushroom from "@/assets/img/mushroom.png";
import { Itoppings } from "@/types";

export const toppings: Itoppings[] = [
  {
    id: 1,
    name: "Mushroom",
    img: mushroom,
    price: 120,
  },
  {
    id: 2,
    name: "Cheese",
    img: cheese,
    price: 150,
  },
  {
    id: 3,
    name: "Jelapeno",
    img: jelapeno,
    price: 100,
  },
  {
    id: 4,
    name: "Chicken",
    img: chicken,
    price: 250,
  },
];
