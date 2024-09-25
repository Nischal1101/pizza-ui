import cheese from "@/assets/img/cheese.png";
import chicken from "@/assets/img/chicken.png";
import jelapeno from "@/assets/img/jelapeno.png";
import mushroom from "@/assets/img/mushroom.png";
import { Iproducts } from "@/types";

export const toppings: Iproducts[] = [
  {
    id: 1,
    name: "Cheese",
    img: cheese,
    price: 150,
  },
  {
    id: 2,
    name: "Jelapeno",
    img: jelapeno,
    price: 100,
  },
  {
    id: 3,
    name: "Chicken",
    img: chicken,
    price: 250,
  },
  {
    id: 4,
    name: "Mushroom",
    img: mushroom,
    price: 120,
  },
  // {
  // id:5,
  //   name: "Cheese",
  //   img: cheese,
  //   price: 200,
  // },
  // {
  // id:6,
  //   name: "Jelapeno",
  //   img: jelapeno,
  //   price: 1000,
  // },
  // {
  //
  // id:6,
  //   name: "Chicken",
  //   img: chicken,
  //   price: 100,
  // },
  // {
  // id:7,
  //   name: "Mushroom",
  //   img: mushroom,
  //   price: 580,
  // },
];
