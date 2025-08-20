'use client'
import Link from "next/link"
import { useEffect } from "react"


export default function ErrorCard({
    error,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="card w-sm mx-auto">
            <p className="font-black text-center text-7xl">Whoops</p>
            <div className="h-px bg-accent my-4 mx-2"></div>

            <p className="font-bold text-center w-full">An Error Occured!</p>
            <p className="text-center w-full font-mono">{error.message}</p>

            <div className="h-4"></div>

            <Link href={"/"}>
                <p className="primary-button text-center w-full">Back To Reality</p>
            </Link>
        </div>
    )
}