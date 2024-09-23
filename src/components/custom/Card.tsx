import { CirclePlus } from "lucide-react";
import { Iproducts } from "@/types";
import { Button } from "../ui/button";
interface IPropType {
  obj: Iproducts;
}

const Card = ({ obj }: IPropType) => {
  return (
    <div className="">
      <div>
        <img src={obj.img} alt="cheese loading" />
      </div>
      <h1>{obj.name}</h1>
      <p>
        Juicy chicken fillet and crispy bacon combined with signature tomato
        sauce, Mozzarella and onions
      </p>
      <div>
        <button>S</button>
        <button>M</button>
        <button>L</button>
      </div>
      <div>
        <p>{obj.price}</p>
        <Button>
          <CirclePlus color="#ea580c" />
        </Button>
      </div>
    </div>
  );
};

export default Card;
