"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import Ordercomp from "@/components/Ordercomp";
import createOrder from "@/actions/actions";
import RiseLoader from "react-spinners/RiseLoader";

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
  const { pending } = useFormStatus();

  function addOrder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const toLower = value.toLowerCase();
    const orderExists = data.some((oneOrder) => oneOrder.order === toLower);
    const toUpper = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    if (orderExists) {
      setShowError(true);
    } else {
      setOrders((o) => [...o, { id: self.crypto.randomUUID(), order: toUpper, completed: false, isEditing: false }]);
      setShowError(false);
    }

    setValue("");
  }

  const updateUserWithListItems = createOrder.bind(null, orders, valueInit);

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
              <Button>Tilføj til liste</Button>
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
        action={updateUserWithListItems}
        className="flex gap-4 items-end">
        <Label className="text-[16px] max-w-16">
          Initialer
          <Input
            value={valueInit}
            onChange={(e) => setValueInit(e.target.value)}
            required
          />
        </Label>
        {pending ? (
          <Button className="grow">
            Tilføjer.. <RiseLoader loading={true} />
          </Button>
        ) : (
          <Button className="grow">Udfør</Button>
        )}
      </form>
    </article>
  );
}
