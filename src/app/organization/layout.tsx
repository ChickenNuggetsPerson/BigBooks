import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

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
        <div className="w-full h-full pt-10 px-4 pl-77">
          {children}
        </div>

      </main>
    </>
  );
}
