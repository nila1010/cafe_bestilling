import Link from "next/link";

export default function NavBtn({ children, linkHref, active }: { children: React.ReactNode; linkHref: string; active: string }) {
  return (
    <Link
      prefetch={false}
      className={`font-bold sm:text-2xl hover:underline text-xl ${active}`}
      href={`/${linkHref}`}>
      {children}
    </Link>
  );
}
