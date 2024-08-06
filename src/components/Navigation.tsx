import NavBtn from "./NavBtn";

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <NavBtn linkHref="/">Mangler</NavBtn>
        </li>
        <li>
          <NavBtn linkHref="bestillinger">Bestillinger</NavBtn>
        </li>
        <li>
          <NavBtn linkHref="modtaget">Modtaget</NavBtn>
        </li>
      </ul>
    </nav>
  );
}
