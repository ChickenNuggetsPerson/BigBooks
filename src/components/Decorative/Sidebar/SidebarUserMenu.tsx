'use client'

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/Decorative/shadcn/ui/dropdown-menu"
import { User2, ChevronUp } from "lucide-react";
import { SidebarMenuItem, SidebarMenuButton } from "../shadcn/ui/sidebar";
import { logout } from "@/auth/actions/Logout";
import { useCompany } from "@/app/CompanyContext";
import Link from "next/link";
import { useModalManager } from "../Modal/ModalContext";
import OrganizationList from "@/components/Organization/OrganizationList";



export default function SidebarUserMenu() {

    const { context } = useCompany()
    const { addModal } = useModalManager()

    function changeOrgClicked() {
        addModal({
            title: "",
            required: false,
            background: false,
            component: (push, pop) => (<OrganizationList showBackground refreshCB={pop} />)
        })
    }

    return (
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton>
                        <User2 /> {context?.userName}
                        <ChevronUp className="ml-auto" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent side="top" className="w-[--radix-popper-anchor-width]">
                    <DropdownMenuItem>
                        <button onClick={changeOrgClicked}> Change Organization </button>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Link className="w-full" href={'/user'}>Account Page</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <button className="text-red-400" onClick={logout}>Logout</button>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    )
}