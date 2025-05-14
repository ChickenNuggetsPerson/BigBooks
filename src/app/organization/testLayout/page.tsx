
import Desktop from "@/components/Decorative/DesktopSystem/Desktop";
import UserGreetingCard from "@/components/User/UserGreetingCard";




export default async function testLayout() {

    //className="relative w-full h-screen overflow-hidden"

    return (
        <Desktop >

            <div className="m-5">
                <p className="font-extrabold text-2xl">Test</p>
                <p className="font-mono">This is a super cool item that uses the window systems</p>
            </div>
            <UserGreetingCard />

            This is a test

        </Desktop>
    )
}