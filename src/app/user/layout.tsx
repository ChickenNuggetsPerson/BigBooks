import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../Loading";
import MainBackground from "@/components/Decorative/MainBackground";

export const metadata: Metadata = {
    title: "Big Books",
    description: "",
};

export default function UserPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>

            <Suspense fallback={<Loading hCenter vCenter />}>
                {children}
            </Suspense>

            <MainBackground />
        </>
    );
}
