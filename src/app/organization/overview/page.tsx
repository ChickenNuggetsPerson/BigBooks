'use client'

import { useCompany } from "@/app/CompanyContext";
import OrgOverview from "@/components/Overview/OrgOverview";

export default function Overview() {

    const {context} = useCompany()

    return (
        <div>

            {/* <Sidebar name={name} uuid={orgUUID} page={Page.Overview}></Sidebar> */}

            <OrgOverview uuid={context?.companyUUID ?? ""}></OrgOverview>
        </div>
    );
}