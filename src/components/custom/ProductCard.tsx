import { TopingsModal } from "@/components";
import React from "react";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

import { Iproduct } from "@/types";
import { DialogTitle } from "@radix-ui/react-dialog";
interface IPropType {
  obj: Iproduct;
}

const ProductCard = ({ obj }: IPropType) => {
  return (
    <Card className="max-w-[350px] border-none rounded-xl shadow-xl">
      <CardHeader className="flex justify-center items-center">
        <Image
          src={obj.img}
          className="productect-cover w-[150px] h-[150px]"
          alt="cheese loading"
        />
      </CardHeader>
      <CardContent>
        <h1 className="font-bold ">{obj.name}</h1>
        <p className="font-semibold text-muted-foreground">
          Juicy chicken fillet and crispy bacon combined with signature tomato
          sauce, Mozzarella and onions
        </p>
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
            <DialogTitle className="hidden">Edit profile</DialogTitle>
            <DialogDescription className="hidden">
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            <TopingsModal selectedProduct={obj} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
