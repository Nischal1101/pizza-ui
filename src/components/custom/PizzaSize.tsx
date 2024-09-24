"use client";
import { Button } from "../ui/button";
import React from "react";

const PizzaSize = () => {
  const [selected, setSelected] = React.useState({
    S: true,
    M: false,
    L: false,
  });

  return (
    <>
      <div className="flex gap-2 mt-5">
        <Button
          onClick={() => setSelected({ S: !selected.S, M: false, L: false })}
          className={`${
            selected.S ? "bg-primary" : "bg-white text-black"
          } rounded-full`}
        >
          S
        </Button>

        <Button
          onClick={() => setSelected({ S: false, M: !selected.M, L: false })}
          className={`${
            selected.M ? "bg-primary" : "bg-white text-black"
          } rounded-full`}
        >
          M
        </Button>
        <Button
          onClick={() => setSelected({ S: false, M: false, L: !selected.L })}
          className={`${
            selected.L ? "bg-primary" : "bg-white text-black"
          } rounded-full`}
        >
          L
        </Button>
      </div>
    </>
  );
};

export default PizzaSize;
