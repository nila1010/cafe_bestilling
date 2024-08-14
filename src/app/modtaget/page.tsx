import Modtagetlisteitem from "@/components/Modtagetlisteitem";
import prisma from "@/lib/db";

export default async function modtaget() {
  const data = await prisma.order.findMany({
    where: {
      completed: true,
    },
  });

  return (
    <article>
      <h1 className="text-xl mt-5">Når produktet ankommer fjern det fra listen</h1>
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
