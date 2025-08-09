import getOrgPayrollGroups from "@/actions/payrollGroup/getOrgPayrollGroups";
import Loading from "@/components/Decorative/Loading/Loading";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
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

            <Suspense fallback={<Loading vCenter hCenter/>}>
                <Page />
            </Suspense>

        </div>
    )
}

async function Page() {

    await throwIfInsufficientPerms(Permissions.payroll.payrollGroup.view)
    const groups = await getOrgPayrollGroups()
    
    return (<PayrollGroupAminList groups={groups}/>)
}