import { RegistrationCodeList } from "@/components/User/RegistrationCode/RegistrationCodeList";
import UserList from "@/components/User/SysAdminUserList/UserList";
import Link from "next/link";







export default async function CodesPage() {
    return (
        <div>
            <Link href={`/user`} className="text-black font-medium text-lg" >
                ← Back
            </Link>

            <div className="flex flex-row gap-10">
                <RegistrationCodeList />
                <UserList />
            </div>

        </div>
    )
}