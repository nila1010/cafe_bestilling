"use client";
import { deleteOrder } from "@/actions/actions";
import { Button } from "./ui/button";

type orderType = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
  bestillingId: string;
};

export default function Modtagetlisteitem({ order }: { order: orderType }) {
  return (
    <li className="flex justify-between items-center">
      <p>{order.order}</p>
      <Button
        onClick={() => {
          deleteOrder(order.id, order.bestillingId);
        }}
        size="sm">
        Modtaget og fjern fra liste
      </Button>
    </li>
  );
}
