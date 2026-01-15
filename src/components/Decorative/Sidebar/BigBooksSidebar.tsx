'use client'

import Link from "next/link";
import Logo from "../Logo";
import { BookUser, Boxes, FileText, House, LayoutList, NotepadText, ScrollText, Users } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/Decorative/shadcn/ui/sidebar"
import SidebarUserMenu from "./SidebarUserMenu";
import { useEffect, useState } from "react";
import getUserPagePermissions, { UserPagePermissions } from "@/actions/user/getUserPagePermissions";
import { useCompany } from "@/app/CompanyContext";


enum Page {
    Overview = "overview",
    Employee = "employee",
    Paystubs = "paystubs",
    Payroll = "payroll"
}

export default function BigBooksSidebar() {

    function href(p: Page) {
        return `/organization/${p}`
    }

    const { context } = useCompany()
    const [perms, setPerms] = useState({} as UserPagePermissions)
    const [showAdmin, setShowAdmin] = useState(false)

    useEffect(() => {
        async function load() {
            const result = await getUserPagePermissions()
            setPerms(result)
            setShowAdmin(result.orgItemsEdit || result.orgUsersEdit || result.payrollGroupEdit || result.taxesEdit)
        }
        load()
    }, [context?.companyUUID])

    return (
        <Sidebar className="h-screen" variant="floating" collapsible="none">
            <SidebarHeader>
                <Link href="/">
                    <Logo width={230} rounded />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Organization:</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={href(Page.Overview)}>
                                        <House />
                                        <span>Overview</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={href(Page.Employee)}>
                                        <Users />
                                        <span>Employee</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={href(Page.Payroll)}>
                                        <ScrollText />
                                        <span>Payroll</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <Link href={href(Page.Paystubs)}>
                                        <FileText />
                                        <span>Paystubs</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>


                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                {showAdmin &&
                    <SidebarGroup>
                        <SidebarGroupLabel>Admin:</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>

                                {perms.payrollGroupEdit &&
                                    <SidebarMenuItem >
                                        <SidebarMenuButton asChild>
                                            <Link href={'/organization/admin/groups'}>
                                                <Boxes />
                                                <span>Payroll Groups</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                }

                                {perms.orgItemsEdit &&
                                    <SidebarMenuItem >
                                        <SidebarMenuButton asChild>
                                            <Link href={'/organization/admin/defaults'}>
                                                <LayoutList />
                                                <span>Payroll Items</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                }

                                {perms.taxesEdit &&
                                    <SidebarMenuItem >
                                        <SidebarMenuButton asChild>
                                            <Link href={'/organization/admin/taxes'}>
                                                <NotepadText />
                                                <span>Taxes</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                }

                                {perms.orgUsersEdit &&
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href={'/organization/admin/users'}>
                                                <BookUser />
                                                <span>Users</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                }


                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                }
            </SidebarContent>


            <SidebarFooter>
                <SidebarMenu>

                    <SidebarUserMenu />

                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )

}


