"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type orderType = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
};

export default async function createOrder(orders: orderType[], valueInit: string) {
  await prisma.bestilling.create({
    data: {
      initials: valueInit,
      orders: {
        create: orders.map((order) => ({
          order: order.order.toLowerCase(),
          completed: order.completed,
          isEditing: order.isEditing,
        })),
      },
    },
    include: {
      orders: true,
    },
  });
  revalidatePath("/");
  redirect("/afgivet");
}

export async function updateOrders(orders: orderType[], orderId: string) {
  await prisma.bestilling.update({
    where: {
      orderId: orderId,
    },
    data: {
      orders: {
        update: orders.map((order) => ({
          where: {
            id: order.id,
          },
          data: {
            order: order.order.toLowerCase(),
            completed: order.completed,
            isEditing: order.isEditing,
          },
        })),
      },
    },
  });
  revalidatePath("/bestillinger");
}

export async function deleteOrder(orderId: string, bestillingId: string) {
  await prisma.order.delete({
    where: {
      id: orderId,
    },
  });
  revalidatePath("/bestilt");

  const bestilling = await prisma.bestilling.findUnique({
    where: { orderId: bestillingId },
    include: { orders: true },
  });

  if (bestilling?.orders.length === 0) {
    await prisma.bestilling.delete({
      where: { orderId: bestillingId },
    });
  }
}
