import cheese from "@/assets/img/cheese.jpg";
import pepproni from "@/assets/img/pepproni.jpg";
import margarita from "@/assets/img/margarita.jpg";

import mushroom from "@/assets/img/mushroom.png";

import { ICartItem } from "@/types";

export const cartProduct: ICartItem[] = [
  {
    product: {
      id: 9,
      name: "Cheese",
      img: cheese,
      price: { S: 300, M: 400, L: 500 },
      category: "pizza",
    },
    chosenConfiguration: {
      priceConfiguration: {
        size: "S",
      },
      selectedToppings: [
        {
          id: 1,
          name: "Mushroom",
          img: mushroom,
          price: 120,
        },
      ],
    },
  },
];
