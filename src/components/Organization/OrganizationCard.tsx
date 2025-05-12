'use client'


import { motion } from 'framer-motion';
import { useChangeSelectedOrg } from './changeSelectedOrg';


interface OrganizationCardProps {
    name: string;
    address: string;
    uuid: string;
    i: number
}

export default function OrganizationCard({ name, address, uuid, i }: OrganizationCardProps) {

    const changeSelectOrg = useChangeSelectedOrg()

    return (

        <motion.tr onClick={() => { 
            
            changeSelectOrg(uuid, name)

        }} className="cursor-pointer rounded-lg bg-card border border-gray-200 shadow-sm mb-5 hover:bg-gray-100 "
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
