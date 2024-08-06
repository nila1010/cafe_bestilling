import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cafe bestilling",
  description: "Bestilling til cafe",
  robots: "noindex, nofollow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${roboto.className} grid place-content-center p-4 `}>
        <header>
          <Navigation></Navigation>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
