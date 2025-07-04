import AnimateChildren from "@/components/Decorative/AnimateChildren";
import IconBackground from "@/components/Decorative/IconBackground/IconBackground";
import UserGreetingCard from "@/components/User/UserGreetingCard";


import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800'
})


export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className="flex flex-col justify-center h-screen">

      <div className="bg-primary w-full shadow-lg h-15 fixed top-0"></div>

      <div className="flex flex-row justify-between h-[calc(100%-120px)]">
        <IconBackground />

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
              <UserGreetingCard />
            </AnimateChildren>
          </div>
        </div>

      </div>

      <div className="bg-primary w-full shadow-lg h-15 fixed bottom-0"></div>

    </div>
  );
}
