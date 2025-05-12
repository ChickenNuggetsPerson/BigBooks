import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../organization/Loading";

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

        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center">
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </div>
    );
}
