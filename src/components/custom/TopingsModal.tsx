import { Plus } from "lucide-react";
import Pizza from "@/assets/img/pizza-main.png";
import { Toppings } from "@/components";
import { Button } from "../ui/button";
import { Iproducts } from "@/types";
import { toppings } from "../list/toppingslist";
import Image from "next/image";

const TopingsModal = ({ obj }: { obj: Iproducts }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center justify-center left w-1/3 bg-white">
          <Image src={Pizza} width={150} height={150} alt="pizza is loading" />
        </div>
        <div className="w-2/3 py-3 px-4">
          <h1 className="font-semibold text-2xl">Margarita</h1>
          <p className="text-muted-foreground mt-2">
            Juicy chicken fillet and crispy bacon combined with signature tomato
            sauce, Mozzarella and onions
          </p>
          <div className="flex gap-2 mt-5 ">
            <Button className="rounded-full">S</Button>
            <Button className="rounded-full bg-white text-black">M</Button>
            <Button className="rounded-full bg-white text-black">L</Button>
          </div>
          <h1 className="mt-8">Extra Toppings</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-5">
            {toppings.map((ele: Iproducts) => (
              <Toppings topping={ele} />
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
    </>
  );
};

export default TopingsModal;
