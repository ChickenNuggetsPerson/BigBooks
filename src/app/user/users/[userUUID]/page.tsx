import UserInfoForm from "@/components/User/SysAdminUserList/UserInfoForm/UserInfoForm"
import { MoveLeft } from "lucide-react"
import Link from "next/link"








export default async function editUserPage({ params }: { params: Promise<{ userUUID: string }> }) {

    const { userUUID } = await params

    return (
        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center pb-10">


                <div>
                    <Link href={`/user/users`} className="text-black font-medium text-lg" >
                        <MoveLeft color="white" />
                    </Link>

                    <UserInfoForm userID={userUUID} />
                </div>

                
            </div>
        </div>
    )
}