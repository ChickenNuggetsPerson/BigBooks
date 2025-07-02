import AnimateChildren from "@/components/Decorative/AnimateChildren";
import UserGreetingCard from "@/components/User/UserGreetingCard";

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '800'
})


export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div>


      <div className="bg-primary w-full shadow-lg h-15 flex flex-row justify-end">

      </div>
      <div className="h-120 flex flex-row justify-between">

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">

            <AnimateChildren x={-50} fade duration={1} dt={0.25}>
              <p className={'text-9xl text-left w-70 select-none text-primary-up opacity-70 ' + openSans.className}>
                BIG
              </p>
              <p className={'text-9xl text-left w-70 select-none text-primary-up opacity-70 ' + openSans.className}>
                Books
              </p>
            </AnimateChildren>

          </div>
        </div>

        <div className="w-1/2 flex flex-row justify-center">
          <div className="h-full flex flex-col justify-center">
            <UserGreetingCard />
          </div>
        </div>

      </div>

      <div className="bg-primary w-full shadow-lg h-30">

      </div>

    </div>
  );
}
