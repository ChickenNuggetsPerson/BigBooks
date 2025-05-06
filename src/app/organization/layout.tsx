import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./Loading";

export const metadata: Metadata = {
  title: "Big Books",
  description: "",
};

export default function OrganizationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Header/>
      </header>

      <Sidebar/>
      
      <main>
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 mt-10">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </div>

      </main>
    </>
  );
}
