"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { updateOrders } from "@/actions/actions";

type orderType = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
  bestillingId: string;
};

export default function Orderlistitem({ orderData, initials, orderDate, orderId }: { orderData: orderType[]; initials: string; orderDate: Date; orderId: string }) {
  const [orders, setOrders] = useState(orderData);

  function checkOrder(ordersId: string) {
    setOrders((o) => o.map((t) => (ordersId === t.id ? { ...t, completed: !t.completed } : t)));
  }

  function orderGiven() {
    setOrders((o) => o.filter((t) => t.completed === false));

    updateOrders(orders, orderId);
  }

  return (
    <div className="mt-5 outline px-6 py-4 rounded-md bg-gray-100">
      <div className="flex justify-between">
        <h2>
          Initialer: <span>{initials}</span>
        </h2>
        <p>
          Bestillings dato: <span suppressHydrationWarning>{orderDate.toLocaleDateString()}</span>
        </p>
      </div>
      <ul className="mt-2">
        <div className="flex justify-between items-center text-xl">
          <li>Produkt</li>
          <li>Bestilt</li>
        </div>
        {orders.map((order, i) => {
          const toUpper = order.order.charAt(0).toUpperCase() + order.order.slice(1).toLowerCase();
          return (
            <li
              key={order.id}
              className="flex justify-between items-center mt-1">
              <p>{toUpper}</p>
              <Input
                onChange={() => {
                  checkOrder(order.id);
                }}
                type="checkbox"
                defaultChecked={order.completed ? true : false}
                className="w-5 h-5 shadow-sm "></Input>
            </li>
          );
        })}
      </ul>

      <Button
        onClick={orderGiven}
        className="ml-auto mt-5">
        Bestilling afgivet
      </Button>
    </div>
  );
}
