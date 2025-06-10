import MainBackground from "@/components/Decorative/MainBackground";
import UserGreetingCard from "@/components/User/UserGreetingCard";



export const dynamic = 'force-dynamic';

export default async function Home() {

  return (
    <div className="justify-items-center">

      <div className="mt-40">
        <UserGreetingCard />
      </div>

      <MainBackground/>
    </div>
  );
}
