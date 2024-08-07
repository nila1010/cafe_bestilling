import Modtagetlisteitem from "@/components/Modtagetlisteitem";
import prisma from "@/lib/db";
export const dynamic = "force-dynamic";

export default async function modtaget() {
  const data = await prisma.order.findMany({
    where: {
      completed: true,
    },
  });

  return (
    <article>
      <h1 className="text-2xl mt-5">Modataget produkter</h1>
      <ul className="grid gap-2 mt-5">
        {data.map((order) => (
          <Modtagetlisteitem
            key={order.id}
            order={order}
          />
        ))}
      </ul>
    </article>
  );
}
