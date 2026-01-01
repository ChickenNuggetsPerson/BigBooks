import AnimateChildren from "@/components/Decorative/AnimateChildren";
import ClickableDiv from "@/components/Decorative/ClickableDiv";
import IconBackground from "@/components/Decorative/IconBackground/IconBackground";
import UserGreetingCard, { UserGreetingCard_Loading } from "@/components/User/UserGreetingCard";
import { GitCompareArrows } from "lucide-react";


import { Open_Sans } from 'next/font/google'
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
      </div>
    </div>
  );
}
