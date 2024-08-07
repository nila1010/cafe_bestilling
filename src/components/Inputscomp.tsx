"use client";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import Ordercomp from "./Ordercomp";

type OrderProps = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
};

export default function Inputscomp() {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [value, setValue] = useState("");

  function addOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setOrders((o) => [...o, { id: self.crypto.randomUUID(), order: value, completed: false, isEditing: false }]);

    setValue("");
  }

  return (
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
  );
}
