import { CirclePlus, Plus } from "lucide-react";
import { Iproducts } from "@/types";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
interface IPropType {
  obj: Iproducts;
}

const ProductCard = ({ obj }: IPropType) => {
  return (
    // <div className="">
    //   <div>
    //     <img src={obj.img} alt="cheese loading" />
    //   </div>
    //   <h1>{obj.name}</h1>
    //   <p>
    //     Juicy chicken fillet and crispy bacon combined with signature tomato
    //     sauce, Mozzarella and onions
    //   </p>
    //   <div>
    //     <button>S</button>
    //     <button>M</button>
    //     <button>L</button>
    //   </div>
    //   <div>
    //     <p>{obj.price}</p>
    //     <Button>
    //       <CirclePlus color="#ea580c" />
    //     </Button>
    //   </div>
    // </div>
    <Card className="max-w-[350px] border-none rounded-xl shadow-xl">
      <CardHeader className="flex justify-center items-center">
        {/* Todo: Fix image size problem */}
        <Image src={obj.img} width={150} height={150} alt="cheese loading" />
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
        <button className="rounded-full w-8 h-8 bg-primary flex justify-center items-center">
          <Plus size={22} color="white" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
