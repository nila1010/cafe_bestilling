import Link from "next/link";

export default function NavBtn({ children, linkHref }: { children: React.ReactNode; linkHref: string }) {
  return (
    <Link
      className="font-bold text-2xl"
      href={`/${linkHref}`}>
      {children}
    </Link>
  );
}
