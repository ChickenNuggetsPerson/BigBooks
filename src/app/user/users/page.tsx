import { RegistrationCodeList } from "@/components/User/RegistrationCode/RegistrationCodeList";
import UserList from "@/components/User/SysAdminUserList/UserList";
import { MoveLeft } from "lucide-react";
import Link from "next/link";







export default async function CodesPage() {
    return (
        <div>
            <Link href={`/user`}>
                <MoveLeft color="white" />
            </Link>


            <div className="flex flex-row gap-10">
                <RegistrationCodeList />
                <UserList />
            </div>

        </div>
    )
}