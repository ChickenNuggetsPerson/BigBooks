import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../organization/Loading";
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
            <div className="flex flex-row justify-center">
                <div className="h-screen flex flex-col justify-center pb-10">
                    <Suspense fallback={<Loading />}>
                        {children}
                    </Suspense>
                </div>
            </div>

            <MainBackground />
        </>
    );
}
