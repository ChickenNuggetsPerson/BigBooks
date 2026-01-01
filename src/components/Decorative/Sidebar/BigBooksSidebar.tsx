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
                                    <a href={href(Page.Overview)}>
                                        <House />
                                        <span>Overview</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={href(Page.Employee)}>
                                        <Users />
                                        <span>Employee</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={href(Page.Payroll)}>
                                        <ScrollText />
                                        <span>Payroll</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={href(Page.Paystubs)}>
                                        <FileText />
                                        <span>Paystubs</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>


                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


                <SidebarGroup>
                    <SidebarGroupLabel>Admin:</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            
                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={'/organization/admin/groups'}>
                                        <Boxes />
                                        <span>Payroll Groups</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={'/organization/admin/defaults'}>
                                        <LayoutList />
                                        <span>Payroll Items</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={'/organization/admin/taxes'}>
                                        <NotepadText />
                                        <span>Taxes</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            <SidebarMenuItem >
                                <SidebarMenuButton asChild>
                                    <a href={'/organization/admin/users'}>
                                        <BookUser />
                                        <span>Users</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>


                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>


            <SidebarFooter>
                <SidebarMenu>

                    <SidebarUserMenu />
                    
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )

}


