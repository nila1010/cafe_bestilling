"use client";
import createOrder from "@/actions/actions";
import AddFormBtn from "@/components/AddFormBtn";
import LagerInput from "@/components/LagerInput";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { lagerListe } from "@/lib/lagerliste";
import { useState } from "react";

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

export default function Lager({ data }: { data: HomeProps }) {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [valueInit, setValueInit] = useState("");

  const updateUserWithListItems = createOrder.bind(null, orders, valueInit);

  return (
    <article className=" items-center mt-5 gap-5">
      <h1 className="text-xl ">Hent fra lager liste</h1>
      <div className="flex justify-between text-xl font-bold mt-5">
        <div className="flex gap-14">
          <h2 className="min-w-32">Produkt</h2>
          <h2>Hent</h2>
        </div>
        <h2>Mangler</h2>
      </div>
      <form
        action={updateUserWithListItems}
        className="grid gap-4 mt-3">
        {lagerListe.map((item, i) => {
          return (
            <LagerInput
              key={i}
              item={item}
              setOrders={setOrders}
              orders={orders}
              data={data}
            />
          );
        })}
        <div className="flex justify-end items-end gap-4 mt-5">
          <Label className="text-[16px] max-w-16">
            Initialer
            <Input
              value={valueInit}
              onChange={(e) => setValueInit(e.target.value)}
              required
            />
          </Label>
          <AddFormBtn />
        </div>
      </form>
    </article>
  );
}
