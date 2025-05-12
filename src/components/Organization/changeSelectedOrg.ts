'use client'

import { useCompany } from "@/app/CompanyContext";
import { generateCompanyContext } from "@/app/CompanyProps";
import { useRouter } from "next/navigation"; 




export function useChangeSelectedOrg() { // Turn this into a react hook
    const router = useRouter();
    const { setContext } = useCompany();

    return (uuid: string, name: string) => {
        setContext(generateCompanyContext(uuid, name));
        router.push(`/organization`);
        router.refresh(); // Optional if needed
    };
}