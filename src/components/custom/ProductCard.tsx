import { PizzaSize, TopingsModal } from "@/components";
import React from "react";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { Iproducts } from "@/types";
interface IPropType {
  obj: Iproducts;
}

const ProductCard = ({ obj }: IPropType) => {
  return (
    <Card className="max-w-[350px] border-none rounded-xl shadow-xl">
      <CardHeader className="flex justify-center items-center">
        <Image
          src={obj.img}
          className="object-cover w-[150px] h-[150px]"
          alt="cheese loading"
        />
      </CardHeader>
      <CardContent>
        <h1 className="font-bold ">{obj.name}</h1>
        <p className="font-semibold text-muted-foreground">
          {" "}
          Juicy chicken fillet and crispy bacon combined with signature tomato
          sauce, Mozzarella and onions
        </p>
        <PizzaSize />
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-bold">RS {obj.price}</p>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="rounded-full w-8 h-8 bg-primary flex justify-center items-center"
            >
              <Plus size={22} color="white" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-sm md:max-w-3xl p-0">
            <TopingsModal obj={obj} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
