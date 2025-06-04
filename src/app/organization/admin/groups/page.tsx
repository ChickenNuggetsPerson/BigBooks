import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import PayrollGroupAminList from "@/components/payroll/groups/PayrollGroupAminList";
import { MoveLeft } from "lucide-react";
import Link from "next/link";




export const dynamic = 'force-dynamic'

export default async function OrgGroupsPage() {

    await throwIfInsufficientPerms(RoleTypes.Admin)

    const groups = await getOrgPayrollGroups()

    return (
        <div>
            <Link href={`/organization/overview`} >
                <MoveLeft />
            </Link>

            <PayrollGroupAminList groups={groups}/>

        </div>
    )
}