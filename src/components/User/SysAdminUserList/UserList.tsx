import getAllUsers from "@/actions/user/getAllUsers";
import EditableDiv from "@/components/Decorative/EditableDiv";






export default async function UserList() {

    const list = (await getAllUsers()) || []

    return (
        <div className="card w-100">

            <div className="text-xl font-semibold">Users:</div>
            <div className="h-px bg-accent mb-4"></div>


            {list.map((user) => (
                <EditableDiv url={`/user/users/${user.uuid}`} key={user.uuid} className="card">
                    <p className={user.isActive ? "" : " text-red-700"}>{user.firstName + " " + user.lastName}</p>
                </EditableDiv>
            ))}

        </div>
    )
}