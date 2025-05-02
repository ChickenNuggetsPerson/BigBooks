import Image from "next/image"
import GithubIcon from "./GithubIcon"
import Link from "next/link"




export default function DevCard() {
    return (
        <div className="w-100 border border-gray-300 rounded-4xl font-mono">

            <div className="bg-primary font-black text-white p-2 pl-5 pt-3 rounded-t-4xl h-10">
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