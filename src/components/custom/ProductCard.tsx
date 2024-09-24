import Pizza from "@/assets/img/pizza-main.png";
import { CircleCheck, Plus } from "lucide-react";
import { Iproducts } from "@/types";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { toppings } from "../list/toppingslist";
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
        <div className="flex gap-2 mt-5">
          <Button className="rounded-full">S</Button>
          <Button className="rounded-full bg-white text-black">M</Button>
          <Button className="rounded-full bg-white text-black">L</Button>
        </div>
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
            <div className="w-full flex justify-between items-center ">
              <div className="flex items-center justify-center left w-1/3 bg-white">
                <Image
                  src={Pizza}
                  width={150}
                  height={150}
                  alt="pizza is loading"
                />
              </div>
              <div className="w-2/3 py-3 px-4">
                <h1 className="font-semibold text-2xl">Margarita</h1>
                <p className="text-muted-foreground mt-2">
                  Juicy chicken fillet and crispy bacon combined with signature
                  tomato sauce, Mozzarella and onions
                </p>
                <div className="flex gap-2 mt-5 ">
                  <Button className="rounded-full">S</Button>
                  <Button className="rounded-full bg-white text-black">
                    M
                  </Button>
                  <Button className="rounded-full bg-white text-black">
                    L
                  </Button>
                </div>
                <h1 className="mt-8">Extra Toppings</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
                  {toppings.map((ele: Iproducts) => (
                    <Card className="p-2 relative">
                      <Image
                        src={ele.img}
                        alt="toppings loading"
                        height={40}
                        width={40}
                      />
                      <h1 className="mt-4">{ele.name}</h1>
                      <p>Rs {ele.price} </p>
                      <CircleCheck className="text-primary absolute top-2 right-2"/>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-between mt-3">
                  <p className="font-bold">RS {obj.price}</p>

                  <button
                    type="button"
                    className="rounded-full w-8 h-8 bg-primary flex justify-center items-center"
                  >
                    <Plus size={22} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
