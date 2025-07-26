import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups";
import Loading from "@/app/Loading";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/permissions/throwIfInsufficientPerms";
import PayrollGroupAminList from "@/components/payroll/groups/PayrollGroupAminList";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";




export const dynamic = 'force-dynamic'

export default async function OrgGroupsPage() {

    

    return (
        <div>
            <Link href={`/organization/overview`} >
                <MoveLeft />
            </Link>

            <Suspense fallback={<div className="mx-auto card w-fit"><Loading vCenter hCenter/></div>}>
                <Page />
            </Suspense>

        </div>
    )
}

async function Page() {

    await throwIfInsufficientPerms(RoleTypes.Admin)
    const groups = await getOrgPayrollGroups()
    
    return (<PayrollGroupAminList groups={groups}/>)
}