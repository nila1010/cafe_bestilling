"use client";
import { deleteOrder } from "@/actions/actions";
import { Button } from "./ui/button";
import { useState } from "react";
import { RiseLoader } from "react-spinners";

type orderType = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
  bestillingId: string;
};

export default function Modtagetlisteitem({ order }: { order: orderType }) {
  const [loading, setLoading] = useState(false);
  const toUpper = order.order.charAt(0).toUpperCase() + order.order.slice(1).toLowerCase();
  return (
    <li className="flex justify-between items-center">
      <p>{toUpper}</p>
      {!loading ? (
        <Button
          onClick={() => {
            setLoading(true);
            deleteOrder(order.id, order.bestillingId);
          }}
          size="sm"
          variant="destructive">
          Fjern fra liste
        </Button>
      ) : (
        <RiseLoader size={10} />
      )}
    </li>
  );
}
