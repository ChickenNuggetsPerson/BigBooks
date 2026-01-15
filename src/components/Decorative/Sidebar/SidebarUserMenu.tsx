'use client'

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuSeparator
} from "@/components/Decorative/shadcn/ui/dropdown-menu"
import { User2, ChevronUp } from "lucide-react";
import { SidebarMenuItem, SidebarMenuButton } from "../shadcn/ui/sidebar";
import { logout } from "@/auth/actions/Logout";
import { useCompany } from "@/app/CompanyContext";
import Link from "next/link";
import { useModalManager } from "../Modal/ModalContext";
import OrganizationList from "@/components/Organization/OrganizationList";
import { SessionNotifierClient } from "../SessionSystem/SessionNotifierClient";



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

                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                            <button onClick={changeOrgClicked} className="cursor-pointer"> Change Organization </button>
                        </DropdownMenuItem>

                        <DropdownMenuItem className="cursor-pointer">
                            <Link className="w-full" href={'/user'}>Account Page</Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">

                            <SessionNotifierClient/>

                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                    <DropdownMenuSeparator />

                    <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                            <button className="text-red-400 cursor-pointer w-full text-start" onClick={logout}>Logout</button>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    )
}