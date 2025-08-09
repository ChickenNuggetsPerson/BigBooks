import { RegistrationCodeList } from "@/components/User/RegistrationCode/RegistrationCodeList";
import UserList from "@/components/User/SysAdminUserList/UserList";
import { MoveLeft } from "lucide-react";
import Link from "next/link";







export default async function CodesPage() {
    return (
        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center pb-10">

                <div>
                    <Link href={`/user`}>
                        <MoveLeft color="black" />
                    </Link>


                    <div className="flex flex-row gap-10">
                        <RegistrationCodeList />
                        <UserList />
                    </div>

                </div>

                
            </div>
        </div>
    )
}