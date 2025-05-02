import type { Metadata } from "next";
import "./globals.css";
import { CompanyProvider } from "./CompanyContext";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Big Books",
  description: "",
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`antialiased bg-background text-text`}>
        <CompanyProvider>
          {children}
        </CompanyProvider>

        <Link href={"/info"} target="_blank" style={{ position: "fixed", bottom: "0px", right: "10px" }} className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        © Hayden Steele
        </Link>

      </body>
    </html>
  );
}
