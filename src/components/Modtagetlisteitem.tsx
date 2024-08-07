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
  return (
    <li className="flex justify-between items-center">
      <p>{order.order}</p>
      {!loading ? (
        <Button
          onClick={() => {
            setLoading(true);
            deleteOrder(order.id, order.bestillingId);
          }}
          size="sm">
          Fjern fra liste
        </Button>
      ) : (
        <RiseLoader size={10} />
      )}
    </li>
  );
}
