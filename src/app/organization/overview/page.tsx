import getOrgDetails from "@/actions/organization/getOrgDetails";
import { getSession } from "@/auth/auth";
import getOrgRole from "@/auth/roles/getOrgRole";
import { Role_Admin } from "@/auth/roles/Roles";
import AdminCard from "@/components/admin/AdminCard";
import AnimateChildren from "@/components/Decorative/AnimateChildren";



export const dynamic = 'force-dynamic'

export default async function Overview() {

    const session = await getSession()
    const role = await getOrgRole()
    const details = await getOrgDetails(session?.orgUUID ?? " ")

    return (

        <AnimateChildren x={-200} className="grid grid-cols-2 gap-4">
            <div className="card max-w-sm">

                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{details.name}</h5>
                {details.isDeleted && <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 opacity-50">{"[ Deactivated ]"}</h5>}
                <p className="font-normal text-gray-700 ">{details.address}</p>

                {(details.notes != "") &&
                    <div>
                        <div className="bg-zinc-200 h-1 my-5 rounded-sm" />

                        <p className="font-normal text-gray-700 ">{details.notes}</p>
                    </div>
                }
            </div>

            <div className="card max-w-sm">
                <h5 className="mb-2 text-2xl font-normal text-gray-700 ">Organization Statistics:</h5>

                <h5 className="font-normal text-gray-700">Total Employees: {details.employeeCount}</h5>
            </div>

            {role.level >= Role_Admin.level && <AdminCard />}

        </AnimateChildren>

    )

}