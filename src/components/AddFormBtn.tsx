import RiseLoader from "react-spinners/RiseLoader";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function AddFormBtn() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button
      disabled={pending}
      className="grow justify-evenly hover:scale-1 pointer-events-none">
      Afgiver bestilling....{" "}
      <RiseLoader
        loading={true}
        color="white"
        size={8}
      />
    </Button>
  ) : (
    <Button className="grow">Afgiv bestilling</Button>
  );
}
