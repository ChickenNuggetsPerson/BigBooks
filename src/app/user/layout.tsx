import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../../components/Decorative/Loading/Loading";
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
            <IconBackground />

            <Suspense fallback={<Loading/>}>
                {children}
            </Suspense>
            
        </>
    );
}
