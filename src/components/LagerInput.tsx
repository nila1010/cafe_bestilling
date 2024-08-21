import { Input } from "./ui/input";
import { Label } from "./ui/label";

type LagerInputProps = {
  title: string;
  name: string;
};

type OrderProps = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
};
type HomeProps = {
  id: string;
  order: string;
  completed: boolean;
  isEditing: boolean;
  bestillingId: string;
}[];

export default function LagerInput({ item, setOrders, orders, data }: { data: HomeProps; orders: OrderProps[]; item: LagerInputProps; setOrders: React.Dispatch<React.SetStateAction<OrderProps[]>> }) {
  const disableCheck = data.some((one) => one.order === item.title.toLowerCase());

  function setOrder(e: React.ChangeEvent<HTMLInputElement>) {
    const orderExists = orders.some((oneOrder) => oneOrder.order === item.title.toLowerCase());

    if (orderExists) {
      setOrders(() => {
        return orders.filter((order) => order.order !== item.title.toLowerCase());
      });
    } else {
      setOrders((o) => [...o, { id: self.crypto.randomUUID(), order: item.title.toLowerCase(), completed: false, isEditing: false }]);
    }
  }
  return (
    <div className="flex justify-between items-center gap-4">
      <Label className="flex gap-10 items-center">
        <p className="min-w-36 text-lg">{item.title}</p>
        <Input
          type="number"
          name={item.title}
          className="w-12 text-center"
        />
      </Label>
      <Label
        htmlFor={item.name}
        className="sr-only"></Label>
      {disableCheck ? (
        <p className="mr-2">Er bestilt</p>
      ) : (
        <Input
          type="checkbox"
          name={item.name}
          className="shadow-none w-10 mr-9"
          onChange={setOrder}
        />
      )}
    </div>
  );
}
