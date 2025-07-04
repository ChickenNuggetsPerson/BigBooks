import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../Loading";
import MainBackground from "@/components/Decorative/MainBackground";
import IconBackground from "@/components/Decorative/IconBackground/IconBackground";

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
            <MainBackground />
            <IconBackground />

            <Suspense fallback={<Loading hCenter vCenter />}>
                {children}
            </Suspense>

            
        </>
    );
}
