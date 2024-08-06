"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Ordercomp from "@/components/Ordercomp";
import createOrder from "@/actions/actions";

type OrderProps = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
};
export default function Home() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [value, setValue] = useState("");
  const [valueInit, setValueInit] = useState("");

  function addOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setOrders((o) => [...o, { id: self.crypto.randomUUID(), order: value, completed: false, isEditing: false, initials: "" }]);

    setValue("");
  }

  return (
    <article className="mt-5 grid gap-4">
      <div>
        <div>
          <form
            onSubmit={addOrder}
            className="flex gap-4 items-end">
            <Label className="grow">
              Produkt
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}></Input>
            </Label>
            <Button>Tilføj</Button>
          </form>
          {orders.map((order, i) => (
            <Ordercomp
              key={i}
              order={order}
              setOrders={setOrders}></Ordercomp>
          ))}
        </div>
      </div>
      <form
        onSubmit={() => {
          createOrder(orders, valueInit);
        }}
        className="flex gap-4 items-end">
        <Label className="text-[16px] max-w-16">
          Initialer
          <Input
            value={valueInit}
            onChange={(e) => setValueInit(e.target.value)}></Input>
        </Label>
        <Button className="grow">Tilføj bestilling</Button>
      </form>
    </article>
  );
}
