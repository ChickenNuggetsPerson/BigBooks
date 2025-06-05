'use client'
import { appVersion } from "@/functions/version";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";








export default function DevLink() {

    useEffect(() => {
        const storedVersion = localStorage.getItem('app_version');
        if (storedVersion && storedVersion !== appVersion) {

            toast.success(`Big Books updated to version ${appVersion}`)
            setTimeout(() => {
                toast("Check the bottom right for a changelog", { duration: 6000 })
            }, 2000);

        }
        localStorage.setItem('app_version', appVersion);
    }, []);

    return (
        <>
            <div style={{ position: "fixed", bottom: "10px", right: "10px" }} >
                <Link href={"/info"} target="_blank" className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pb-2">
                    © Hayden Steele
                </Link>

                <Link href={"/info/changelog"} target="_blank"  className="bg-gray-600 text-md text-white font-bold p-2 rounded-lg">
                    ✨ Changelog ✨
                </Link>
            </div>
        </>
    )
}