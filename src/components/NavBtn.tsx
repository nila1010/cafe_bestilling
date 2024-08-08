import Link from "next/link";

export default function NavBtn({ children, linkHref }: { children: React.ReactNode; linkHref: string }) {
  return (
    <Link
      prefetch={false}
      className="font-bold text-2xl hover:underline"
      href={`/${linkHref}`}>
      {children}
    </Link>
  );
}
