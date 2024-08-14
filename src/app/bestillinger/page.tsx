import Inner from "./Inner";
import prisma from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function bestilt() {
  const data = await prisma.bestilling.findMany({
    include: {
      orders: true,
    },
  });

  return <Inner data={data} />;
}
