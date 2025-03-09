"use client";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface PizzaSizeProps {
  pizzaSize: "S" | "M" | "L";
  setPizzaSize: React.Dispatch<React.SetStateAction<"S" | "M" | "L">>;
  onSizeChange?: (size: "S" | "M" | "L") => void; // Add this prop
}

const PizzaSize = ({
  pizzaSize,
  setPizzaSize,
  onSizeChange,
}: PizzaSizeProps) => {
  const handlePizzaSize = (data: "S" | "M" | "L") => {
    setPizzaSize(data);
    if (onSizeChange) {
      onSizeChange(data); // Notify parent component about the size change
    }
  };

  return (
    <RadioGroup
      defaultValue={pizzaSize}
      className="flex gap-2 mt-5"
      onValueChange={(data: "S" | "M" | "L") => handlePizzaSize(data)}
    >
      <div>
        <RadioGroupItem
          value="S"
          id="small"
          className="peer sr-only"
          aria-label="Small"
        />
        <Label
          htmlFor="small"
          className="flex rounded-full w-8 h-8 items-center justify-center hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
        >
          S
        </Label>
      </div>

      <div>
        <RadioGroupItem
          value="M"
          id="medium"
          className="peer sr-only"
          aria-label="Medium"
        />
        <Label
          htmlFor="medium"
          className="flex items-center justify-center rounded-full w-8 h-8 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
        >
          M
        </Label>
      </div>

      <div>
        <RadioGroupItem
          value="L"
          id="large"
          className="peer sr-only"
          aria-label="Large"
        />
        <Label
          htmlFor="large"
          className="flex items-center justify-center rounded-full w-8 h-8 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary [&:has([data-state=checked])]:bg-primary peer-data-[state=checked]:text-white [&:has([data-state=checked])]:text-white"
        >
          L
        </Label>
      </div>
    </RadioGroup>
  );
};

export default PizzaSize;
