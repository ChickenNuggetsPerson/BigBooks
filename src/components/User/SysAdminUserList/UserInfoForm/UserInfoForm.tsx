import getOrgList from "@/actions/organization/getOrgList"
import UserActiveBtn from "../UserActiveBtn"
import getUser from "@/actions/user/getUser"
import UnincludedOrgCard from "./UnincludedOrgCard"
import IncludedOrgCard from "./IncludedOrgCard"
import UserAllocatedBtn from "./UserAllocatedBtn"
import { Organization } from "@/database/generated/prisma"
import { getRoleFromID } from "@/auth/roles/Roles"





export default async function UserInfoForm({ userID }: { userID: string }) {

    const orgs = await getOrgList(true)
    const user = await getUser(userID)

    if (!user) {
        return (
            <div>
                User does not exist...
            </div>
        )
    }

    const orgsNotIncluded = [] as Organization[]

    orgs.forEach((org) => { // Make array of organizations not included in the user's memberships 
        for (let i = 0; i < user.memberships.length; i++) {
            if (user.memberships[i].organizationId == org.uuid) {
                return
            }
        }
        orgsNotIncluded.push(org)
    })

    function getOrg(uuid: string) {
        for (let i = 0; i < orgs.length; i++) {
            if (orgs[i].uuid == uuid) {
                return orgs[i]
            }
        }

        throw new Error("Error Fetching Organization")
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="card w-lg h-80">

                <div className="flex flex-row justify-between pb-2">
                    <div>
                        {!user.isActive && <h1 className={"text-md font-bold opacity-50"}>{"[ Deactivated ]"}</h1>}
                        <h1 className={"text-2xl font-bold " + (user.isActive ? "" : "opacity-50")}>{user.firstName + " " + user.lastName}</h1>
                    </div>

                    <UserActiveBtn uuid={user.uuid} isActive={user.isActive} />
                </div>

                <div className="bg-accent h-px mb-5"></div>

                <div className="flex flex-row w-full h-50">

                    <div className="card w-1/2 overflow-y-scroll">
                        <h1>Unincluded Orgs:</h1>
                        <div className="bg-accent h-px mb-1"></div>

                        <div>
                            {orgsNotIncluded.map((org) => (
                                <UnincludedOrgCard org={org} user={user} key={org.uuid} />
                            ))}
                        </div>

                    </div>
                    <div className="card w-1/2 overflow-y-scroll">
                        <h1>Belongs To:</h1>
                        <div className="bg-accent h-px mb-1"></div>

                        <div>
                            {user.memberships.map((role) => (
                                <IncludedOrgCard role={getRoleFromID(role.role)} org={getOrg(role.organizationId)} key={role.userId + role.organizationId} user={user} />
                            ))}

                        </div>

                    </div>

                </div>

            </div>

            <UserAllocatedBtn user={user} />

        </div>
    )
}


