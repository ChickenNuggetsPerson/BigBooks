import Link from "next/link";
import Logo from "./Logo";
import { FileText, House, ScrollText, Users } from "lucide-react";
import HeaderOrgOptions from "../Header/HeaderOrgOptions";
import { Suspense } from "react";
import InteractiveUserIcon from "../User/InteractiveUserIcon";



enum Page {
    Overview = "overview",
    Employee = "employee",
    Paystubs = "paystubs",
    Payroll = "payroll"
}

export default function Sidebar() {

    const btnClass = "bg-dark_text-up hover:bg-dark_text-down w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 "

    function href(p: Page) {
        return `/organization/${p}`
    }


    return (
        <div className="z-60 w-65 h-fit fixed inset-y-0 m-5">

            <div className="pb-2">
                <Suspense fallback={<div className="animate-pulse text-2xl font-bold"> Loading... </div>}>
                    <InteractiveUserIcon />
                </Suspense>
            </div>

            <div className="smallCard overflow-clip" style={{ padding: 0 }} >

                <Link href={"/"} >
                    <Logo width={260} rounded={false} />
                </Link>


                {/* Divider */}
                <div className="h-2 w-full bg-primary opacity-50"></div>

                <div className="h-4"></div>


                <ul className="flex flex-col w-full px-2 pb-2 gap-2">

                    <Link className={btnClass} href={href(Page.Overview)}>
                        <House size={16} />
                        Dashboard
                    </Link>


                    <Link className={btnClass} href={href(Page.Employee)}>
                        <Users size={16} />
                        Employees
                    </Link>

                    <Link className={btnClass} href={href(Page.Paystubs)}>
                        <FileText size={16} />
                        Paystubs
                    </Link>

                    <Link className={btnClass} href={href(Page.Payroll)}>
                        <ScrollText size={16} />
                        Payroll
                    </Link>

                </ul>
            </div>

            <HeaderOrgOptions />
        </div>
    )

}


