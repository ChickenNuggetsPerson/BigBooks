import Image from "next/image"
import GithubIcon from "./GithubIcon"
import Link from "next/link"




export default function DevCard() {
    return (
        <div className="w-100 border border-gray-300 rounded-3xl font-mono h-fit card" style={{ padding: 0 }}>

            <div className="bg-primary/80 font-black text-white p-2 pl-5 pt-3 h-10 overflow-hidden" style={{ borderTopLeftRadius: 14, borderTopRightRadius: 14 }}>
                BIG Books
            </div>

            <div className="flex flex-row m-5">

                <Image
                    src="/Fog-Square.png"
                    width={150}
                    height={150}
                    alt=""
                    className="rounded-xl mr-10"
                />

                <div className="flex flex-col">
                    <p className="font-semibold">Hayden Steele</p>
                    <div className="bg-black h-px" ></div>
                    <p className="text-sm pt-2">BIG Books Developer</p>


                    <div className="grow"></div>

                    <div className="flex flex-row justify-end">
                        <Link href={"https://github.com/ChickenNuggetsPerson"} target="_blank">
                            <GithubIcon className="w-10" />
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}