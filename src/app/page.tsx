import prisma from "@/lib/db";
import Inner from "./Inner";

export default async function page() {
  const data = await prisma.order.findMany();

  return <Inner data={data} />;
}
