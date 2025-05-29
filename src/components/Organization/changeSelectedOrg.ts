'use client'

import { useCompany } from "@/app/CompanyContext";
import { generateCompanyContext } from "@/app/CompanyProps";
import UpdateSelectedOrg from "@/auth/actions/UpdateSelectedOrg";
import { useRouter } from "next/navigation"; 




export function useChangeSelectedOrg() { // Turn this into a react hook
    const router = useRouter();
    const { setContext } = useCompany();

    return async (uuid: string, name: string) => {
        setContext(generateCompanyContext(uuid, name));
        await UpdateSelectedOrg(uuid)

        router.push(`/organization`);
        router.refresh(); // Optional if needed
    };
}