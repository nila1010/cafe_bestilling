"use client";
import Orderlistitem from "@/components/Orderlistitem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Prisma } from "@prisma/client";
import { useState } from "react";

type InnerProps = Prisma.BestillingGetPayload<{
  include: {
    orders: true;
  };
}>[];

export default function Inner({ data }: { data: InnerProps }) {
  const [login, setLogin] = useState(false);

  const filteredData = data.map((oneOrder) => ({
    ...oneOrder,
    orders: oneOrder.orders.filter((order) => !order.completed),
  }));

  function checkLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.password.value === "1234") {
      setLogin(true);
    }
  }

  return (
    <article>
      {!login ? (
        <>
          <h1 className="text-xl mt-5">Login for at se lister</h1>
          <form
            onSubmit={checkLogin}
            className="mt-5">
            <Label>
              Password
              <Input
                name="password"
                type="password"
                className="w-32"
              />
            </Label>
            <Button className="mt-3">Login</Button>
          </form>
        </>
      ) : (
        <>
          <h1 className="text-xl mt-5">Oversigt over ting som skal bestilles</h1>
          {filteredData.map((oneOrder) =>
            oneOrder.orders.length > 0 ? (
              <Orderlistitem
                key={oneOrder.orderId}
                orderData={oneOrder.orders}
                initials={oneOrder.initials}
                orderDate={oneOrder.orderDate}
                orderId={oneOrder.orderId}
              />
            ) : null
          )}
        </>
      )}
    </article>
  );
}
