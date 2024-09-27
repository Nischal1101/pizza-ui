import { Button } from "../ui/button";
import pizza from "../../assets/img/pizza-main.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProductCard from "./ProductCard";

import AllProductCard from "./AllProductCard";

import { products } from "../list/productlist";
import { Iproduct } from "@/types";

const Hero = () => {
  return (
    <>
      <section className="bg-white">
        <MaxWidthWrapper>
          <div className="container flex flex-col-reverse md:flex-row justify-between items-center py-24">
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-5 md:mt-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans  font-semibold">
                Get yummy pizza in{" "}
                <span className="text-primary text-nowrap">30 min</span>
              </h1>
              <p className="text-muted-foreground">
                No need to pay if, order took more than 30 min
              </p>
              <Button>Order now &rarr;</Button>
            </div>
            <div className="flex justify-center">
              <Image
                src={pizza}
                alt="pizza image loading"
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="">
        <MaxWidthWrapper>
          <div className="container py-8 ">
            <div className="">
              <Tabs defaultValue="pizza" className="">
                <TabsList className="px-3 py-3 bg-white">
                  <TabsTrigger value="pizza">Pizza</TabsTrigger>
                  <TabsTrigger value="softdrinks">Softdrinks</TabsTrigger>
                </TabsList>
                <TabsContent value="pizza" className="mt-5">
                  <AllProductCard
                    pizzas={products.filter(
                      (product) => product.category === "pizza"
                    )}
                  />
                </TabsContent>
                <TabsContent value="softdrinks" className="mt-5">
                  <div className="grid mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center">
                    {products
                      .filter((p) => p.category === "drinks")
                      .map((product: Iproduct) => (
                        <ProductCard obj={product} key={product.name} />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Hero;
