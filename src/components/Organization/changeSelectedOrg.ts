'use client'

import { useCompany } from "@/app/CompanyContext";
import { generateCompanyContext } from "@/app/CompanyProps";
import UpdateSelectedOrg from "@/auth/actions/UpdateSelectedOrg";
import { useRouter } from "next/navigation"; 




export function useChangeSelectedOrg() { // Turn this into a react hook
    const router = useRouter();
    const { setContext } = useCompany();

    return async (uuid: string, name: string) => {

        const result = await UpdateSelectedOrg(uuid)
        if (result.error) { 
            alert("You do not have the permissions to access that organization.")
            return
        }
        
        setContext(generateCompanyContext(uuid, name));
        
        router.push(`/organization/overview`);
        router.refresh(); 
    };
}