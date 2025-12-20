import AnimateChildren from "@/components/Decorative/AnimateChildren";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import IconBackground from "@/components/Decorative/IconBackground/IconBackground";
import UserGreetingCard, { UserGreetingCard_Loading } from "@/components/User/UserGreetingCard";
import { GitCompareArrows } from "lucide-react";


import { Open_Sans } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800'
})


export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className="flex flex-col justify-center">

      <div className="flex flex-row justify-between h-screen">
        <IconBackground />

        <ClickableDiv
          className="absolute left-1 top-1 smallCard select-none"
          href="/info/changelog"
        >
          <div className="flex gap-2 px-4 py-2 rounded-lg font-semibold text-gray-600">
            <GitCompareArrows size={25} color="#575757"/>
            Changelog
          </div>
        </ClickableDiv>

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">

            <AnimateChildren x={-50} fade duration={1} dt={0.25} className="card">
              <p className={'text-9xl text-left w-fit select-none text-primary-up ' + openSans.className}>
                BIG
              </p>
              <p className={'text-9xl text-left w-fit select-none text-primary-up ' + openSans.className}>
                Books
              </p>
            </AnimateChildren>

          </div>
        </div>

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">
            <AnimateChildren fade y={-10}>
              <Suspense fallback={<UserGreetingCard_Loading />}>

                <UserGreetingCard />

              </Suspense>
            </AnimateChildren>
          </div>
        </div>

        <div className="absolute bottom-4 w-full flex justify-center">
          <ClickableDiv className="smallCard select-none" style={{ padding: 10 }}>
            <Link href={"/#NewUser"}>
              New To Bigbooks?
            </Link>
          </ClickableDiv>
        </div>
      </div>

      <div className="bg-primary w-screen" id="NewUser">
        <div className="p-5 pb-10 w-full flex justify-start">
          <div>
            <h1 className={'text-9xl w-fit select-none text-white ' + openSans.className}>What is</h1>
            <h1 className={'text-9xl w-fit select-none text-white ' + openSans.className}>Big Books?</h1>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="p-25 pb-30 w-full flex justify-center">
          <div className="w-3/4">
            <h1 className={'text-6xl w-fit text-center select-none text-text/80 ' + openSans.className}>An all-in-one accounting software for small businesses</h1>
          </div>
        </div>
      </div>

      <div className="bg-primary w-screen">
        <div className="p-5 pb-10 w-full flex justify-start">
          <div>
            <h1 className={'text-9xl w-fit select-none text-white ' + openSans.className}>But why</h1>
            <h1 className={'text-9xl w-fit select-none text-white ' + openSans.className}>Big Books?</h1>
          </div>
        </div>
      </div>

      <div className="w-screen">
        <div className="p-25 pb-30 w-full flex justify-center">
          <div className="w-3/4">
            <h1 className={'text-6xl w-fit text-center select-none text-text/80 ' + openSans.className}>{"We don't charge outrageous prices!"}</h1>
            <h2 className="text-end" >*Cough Quickbooks*</h2>
          </div>
        </div>
      </div>

    </div>
  );
}
