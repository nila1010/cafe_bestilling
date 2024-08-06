import Orderlistitem from "@/components/Orderlistitem";
import prisma from "@/lib/db";

export default async function bestilt() {
  const data = await prisma.bestilling.findMany({
    include: {
      orders: true,
    },
  });

  const filteredData = data.map((oneOrder) => ({
    ...oneOrder,
    orders: oneOrder.orders.filter((order) => !order.completed),
  }));

  return (
    <article>
      <h1 className="text-2xl mt-5">Oversigt over ting som skal bestilles</h1>
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
    </article>
  );
}
