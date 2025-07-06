import OrganizationList from "@/components/Organization/OrganizationList";
import { Suspense } from "react";
import UserPageColumn, { UserPageColumn_Loading } from "@/components/User/UserPageColumn";


export const dynamic = 'force-dynamic';




export default function UserPage() {

    return (
        <div className="py-5 px-10">

            <div className="flex flex-row justify-between w-full gap-10 mt-15">

                {/* Left Side */}
                <Suspense fallback={<UserPageColumn_Loading />}>
                    <UserPageColumn />
                </Suspense>

                {/* Right Side */}
                <div className="mx-auto">
                    <OrganizationList showBackground />
                </div>
            </div>
        </div>
    )
}


