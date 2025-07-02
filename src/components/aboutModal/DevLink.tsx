'use client'
import { appVersion } from "@/utils/functions/version";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";








export default function DevLink() {

    useEffect(() => {
        const storedVersion = localStorage.getItem('app_version');
        if (storedVersion && storedVersion !== appVersion) {
            toast.success(`Big Books updated to version ${appVersion}`)
        }
        localStorage.setItem('app_version', appVersion);
    }, []);

    return (
        <>
            <div style={{ position: "fixed", bottom: "10px", right: "5px" }} >
                <Link href={"/info"} target="_blank" className="smallCard">
                    © Hayden Steele
                </Link>
            </div>
        </>
    )
}