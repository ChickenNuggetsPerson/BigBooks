import IconBackground from "@/components/Decorative/IconBackground/IconBackground";
import Link from "next/link";




export default function NotFound() {
    return (
        <>
            <IconBackground />

            <div className="flex flex-row justify-center">
                <div className="h-screen flex flex-col justify-center pb-10">


                    <div className="card w-sm">
                        <p className="font-black text-center text-8xl">404</p>
                        <div className="h-px bg-accent my-4 mx-2"></div>

                        <p className="font-bold text-center w-full">Whoops!</p>
                        <p className="text-center w-full">{`This page does not exist :( `}</p>

                        <div className="h-4"></div>
                        <Link href={"/"}>
                            <p className="primary-button text-center w-full">Back To Reality</p>
                        </Link>
                    </div>


                </div>
            </div>
        </>
    );
}