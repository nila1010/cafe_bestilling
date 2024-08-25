"use client";
import { usePathname } from "next/navigation";
import NavBtn from "./NavBtn";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="my-4">
      <ul className="flex gap-4">
        <li>
          <NavBtn
            active={`${pathname === "/" ? "underline" : ""}`}
            linkHref="/">
            Mangler
          </NavBtn>
        </li>
        <li>
          <NavBtn
            active={`${pathname === "/bestillinger" ? "underline" : ""}`}
            linkHref="bestillinger">
            Bestillinger
          </NavBtn>
        </li>
        <li>
          <NavBtn
            active={`${pathname === "/bestilt" ? "underline" : ""}`}
            linkHref="bestilt">
            Bestilt
          </NavBtn>
        </li>
        <li>
          <NavBtn
            active={`${pathname === "/lager" ? "underline" : ""}`}
            linkHref="lager">
            Lager
          </NavBtn>
        </li>
      </ul>
    </nav>
  );
}
