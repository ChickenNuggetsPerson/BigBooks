'use client'

import { useCompany } from '@/app/CompanyContext';
import { generateCompanyContext } from '@/app/CompanyProps';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'


interface OrganizationCardProps {
    name: string;
    address: string;
    uuid: string;
    i: number
}

export default function OrganizationCard({ name, address, uuid, i }: OrganizationCardProps) {

    const router = useRouter()
    const { setContext } = useCompany();

    return (

        <motion.tr onClick={() => { setContext(generateCompanyContext(uuid, name)); router.push(`/organization`) }} className="cursor-pointer rounded-lg bg-card border border-gray-200 shadow-sm mb-5 hover:bg-gray-100 "
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75 + (i * 0.25), type: 'spring' }}
            >
                <td className="p-[10] w-1/4 mb-2 text-normal tracking-tight text-gray-900 "> {`${name}`} </td>
                <td className="p-2 w-1/2 text-center font-normal text-gray-700">{address}</td>
            </motion.tr>

    );
}
