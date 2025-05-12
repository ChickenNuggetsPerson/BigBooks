import getUserList from "@/actions/user/getUserList";
import UserActiveBtn from "./UserActiveBtn";






export default async function UserList() {
    
    let list = await getUserList()
    if (!list) {
        list = []
    }

    return (
        <div className="card w-100">
            
            <div className="text-xl font-semibold">Users:</div>

            <div className="h-px bg-accent mb-4"></div>


            {list.map((user, index) => (
                <div key={index} className="card flex flex-row justify-between">
                    
                    <p className={user.isActive ? "" : "opacity-70 text-red-700"}>{user.firstName + " " + user.lastName}</p>

                    <UserActiveBtn uuid={user.uuid} isActive={user.isActive} />

                </div>
            ))}

        </div>
    )
}