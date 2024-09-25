import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

const PizzaSize = () => {
  return (
    <>
      <RadioGroup defaultValue="small" className="flex gap-2 mt-5 ">
        <div>
          <RadioGroupItem
            value="small"
            id="small"
            className="peer sr-only"
            aria-label="Small"
          />
          <Label
            htmlFor="small"
            className="flex rounded-full w-8 h-8 items-center justify-center  hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
          >
            S
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="medium"
            id="medium"
            className="peer sr-only"
            aria-label="Medium"
          />
          <Label
            htmlFor="medium"
            className="flex items-center justify-center rounded-full w-8 h-8    hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
          >
            M
          </Label>
        </div>

        <div>
          <RadioGroupItem
            value="large"
            id="large"
            className="peer sr-only"
            aria-label="Large"
          />
          <Label
            htmlFor="large"
            className="flex items-center justify-center rounded-full w-8 h-8   hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
          >
            L
          </Label>
        </div>
      </RadioGroup>

      {/* <div className="flex gap-2 mt-5">
        <Button className="rounded-full w-8 h-8">S</Button>
        <Button className="rounded-full w-8 h-8">M</Button>
        <Button className="rounded-full w-8 h-8">L</Button>
      </div> */}
    </>
  );
};

export default PizzaSize;
