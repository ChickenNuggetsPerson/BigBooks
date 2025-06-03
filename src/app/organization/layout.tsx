import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../Loading";

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

      <Sidebar />

      <main>
        <div style={{ height: "calc(100vh - calc(var(--spacing) * 12))" }} className="w-full pt-10 px-4 ps-72 mt-12">

          <Header />

          <Suspense fallback={<Loading hCenter vCenter />}>
            {children}
          </Suspense>
        </div>

      </main>
    </>
  );
}
