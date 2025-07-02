import CreateUserForm from "@/components/auth/CreateUserForm";



export const dynamic = 'force-dynamic';

export default async function NewUserPage({ params }: { params: Promise<{ code: string }> }) {

    const { code } = await params

    return (
        <div className="flex flex-row justify-center">
            <div className="h-screen flex flex-col justify-center pb-10">
                <CreateUserForm code={code} />
            </div>
        </div>
    )
}