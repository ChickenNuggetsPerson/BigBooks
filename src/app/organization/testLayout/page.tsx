
import Desktop from "@/components/Decorative/DesktopSystem/Desktop";
import OpenModalBtn from "@/components/Decorative/Modal/OpenModalBtn";
import UserGreetingCard from "@/components/User/UserGreetingCard";




export default async function testLayout() {

    return (
        <Desktop >

            <div className="m-5">
                <p className="font-extrabold text-2xl">Test</p>
                <p className="font-mono">This is a super cool item that uses the window systems</p>
            </div>

            <UserGreetingCard />

            <div>
                <p>This is a test</p>
                <OpenModalBtn modal={
                    <div>
                        This is a test
                        <OpenModalBtn modal={<p>This is a test</p>} text={"Test"} className={"accent-button"} title={"Test Modal"} />
                    </div>
                } text={"Test"} className={"accent-button"} title={"Test Modal"} />
            </div>

        </Desktop>
    )
}