import UserInfoForm from "@/components/User/SysAdminUserList/UserInfoForm/UserInfoForm"
import Link from "next/link"








export default async function editUserPage({ params }: { params: Promise<{ userUUID: string }> }) {

    const { userUUID } = await params

    return (
        <div>
            <Link href={`/user/users`} className="text-black font-medium text-lg" >
                ← Back
            </Link>
            
            <UserInfoForm userID={userUUID} />
        </div>
    )
}