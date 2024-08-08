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

type HomeProps = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
  bestillingId: string;
}[];

export default function Home({ data }: { data: HomeProps }) {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [value, setValue] = useState("");
  const [valueInit, setValueInit] = useState("");
  const [showError, setShowError] = useState(false);

  function addOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const orderExists = data.some((oneOrder) => oneOrder.order === value);
    const toUpper = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    if (orderExists) {
      setShowError(true);
    } else {
      setOrders((o) => [...o, { id: self.crypto.randomUUID(), order: toUpper, completed: false, isEditing: false }]);
      setShowError(false);
    }

    setValue("");
  }
  return (
    <article className="mt-5 grid gap-4">
      <div>
        <div>
          <form
            onSubmit={addOrder}
            className="">
            <div className="flex gap-4 items-end">
              <Label className="grow">
                Produkt
                <Input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}></Input>
              </Label>
              <Button>Tilføj</Button>
            </div>

            {showError && <p className="text-red-600 mt-2">Produktet er allerede på listen</p>}
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
