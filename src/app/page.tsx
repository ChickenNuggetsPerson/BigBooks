import AnimateChildren from "@/components/Decorative/AnimateChildren";
import MainBackground from "@/components/Decorative/MainBackground";
import UserGreetingCard from "@/components/User/UserGreetingCard";



export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className="justify-items-center">

      <AnimateChildren y={-20} className="mt-40">
        <UserGreetingCard />
      </AnimateChildren>

      <MainBackground/>
    </div>
  );
}
