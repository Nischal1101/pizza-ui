import { Button } from "../ui/button";
import pizza from "../../assets/img/pizza-main.png";
// import Card from "./Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search } from "lucide-react";
import { pizzas } from "../list/pizzalist";
import Card from "./Card";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container flex justify-between items-center py-24">
          <div className="w-1/2 space-y-4">
            <h1 className="text-7xl font-sans  font-semibold">
              Get yummy pizza in <span className="text-primary">30 min</span>
            </h1>
            <p className="">No need to pay if, order took more than 30 min</p>
            <Button>Order now &rarr;</Button>
          </div>
          <div className="">
            <Image
              src={pizza}
              alt="pizza image loading"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="container py-8 ">
          <div className="flex justify-between">
            <Tabs defaultValue="account" className=" ">
              <TabsList className="px-3">
                <TabsTrigger value="pizza">Pizza</TabsTrigger>
                <TabsTrigger value="softdrinks">Softdrinks</TabsTrigger>
                <TabsTrigger value="sauces">Sauces</TabsTrigger>
              </TabsList>
              <TabsContent value="pizza">
                <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {pizzas.map((pizza) => (
                    <Card obj={pizza} />
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="softdrinks">
                {" "}
                <h1 className="mt-6">hello2</h1>
              </TabsContent>
              <TabsContent value="sauces">
                {" "}
                <h1 className="mt-6">hello4</h1>
              </TabsContent>
            </Tabs>
            <div className="w-[450px]">
              <Search className="absolute left-3" size={20} />
              <input
                placeholder="testing"
                type="text"
                className="w-full border px-2 py-2 rounded-lg"
              />
            </div>
            <Select>
              <SelectTrigger className=" w-[300px] ">
                <SelectValue placeholder="Vegetarian" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="biratnagar">Biratnagar</SelectItem>
                  <SelectItem value="kathmandu">Kathmandu</SelectItem>
                  <SelectItem value="pokhara">Pokhara</SelectItem>
                  <SelectItem value="pathari">Pathari</SelectItem>
                  <SelectItem value="itahari">Itahari</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
