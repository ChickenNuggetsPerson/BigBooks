import Link from "next/link";
import Logo from "./Decorative/Logo";
import { House, ScrollText, Users } from "lucide-react";



enum Page {
    Overview = "overview",
    Employee = "employee",
    Payroll = "payroll"
}

export default function Sidebar() {

    const btnClass = "bg-dark_text-up hover:bg-dark_text-down w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 "

    function href(p: Page) {
        return `/organization/${p}`
    }


    return (
        <div id="hs-application-sidebar" className="
            w-65 h-full
            fixed inset-y-0 start-0 z-60
            bg-white border-e border-gray-200
        " role="dialog" aria-label="Sidebar">
            <div className="relative flex flex-col h-full max-h-full">

                <Link href={"/"} >
                    <Logo width={260} rounded={false} />
                </Link>


                {/* Divider */}
                <div className="h-[4] w-full bg-primary opacity-50"></div>


                {/* Content */}
                <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                        <ul className="flex flex-col space-y-1">


                            <Link className={btnClass} href={href(Page.Overview)}>
                                <House size={16} />
                                Dashboard
                            </Link>


                            <Link className={btnClass} href={href(Page.Employee)}>
                                <Users size={16} />
                                Employees
                            </Link>


                            <Link className={btnClass} href={href(Page.Payroll)}>
                                <ScrollText size={16} />
                                Payroll
                            </Link>



                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )

}


