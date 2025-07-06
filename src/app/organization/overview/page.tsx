import AnimateChildren from "@/components/Decorative/AnimateChildren";
import OrganizationAdminToolsCard from "@/components/Organization/OverviewPage/OrganizationAdminToolsCard";
import OrganizationDetailsCard, { OrganizationDetailsCard_Loading } from "@/components/Organization/OverviewPage/OrganizationDetailsCard";
import OrganizationPayrollCard, { OrganizationPayrollCard_Loading } from "@/components/Organization/OverviewPage/OrganizationPayrollCard";
import OrganizationStatsCard, { OrganizationStatsCard_Loading } from "@/components/Organization/OverviewPage/OrganizationStatsCard";
import { Suspense } from "react";

// export const dynamic = 'force-dynamic'

export default function Overview() {

    return (

        <AnimateChildren y={-30} className="flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-10 pb-50 lg:pb-10">

            <div className="flex flex-col gap-10 w-sm">
                <Suspense fallback={<OrganizationDetailsCard_Loading />}>
                    <OrganizationDetailsCard />
                </Suspense>

                <Suspense fallback={<OrganizationPayrollCard_Loading />}>
                    <OrganizationPayrollCard />
                </Suspense>
            </div>

            <div className="flex flex-col gap-10 w-sm">
                <Suspense fallback={<OrganizationStatsCard_Loading />}>
                    <OrganizationStatsCard />
                </Suspense>

                <Suspense>
                    <OrganizationAdminToolsCard />
                </Suspense>
            </div>

        </AnimateChildren>

    )

}