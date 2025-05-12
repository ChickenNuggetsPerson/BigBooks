import AnimateChildren from "@/components/AnimateChildren";
import Logo from "@/components/Decorative/Logo";
import UserGreetingCard from "@/components/User/UserGreetingCard";



export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className="justify-items-center min-h-screen p-8">

      <AnimateChildren x={0} y={-20}>
        <div className="w-100 mb-10">
          <Logo width={300} rounded={true} />
        </div>

        <UserGreetingCard />
      </AnimateChildren>

    </div>
  );
}
