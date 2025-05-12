import Link from "next/link";
import Logo from "./Decorative/Logo";



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


    return (<div id="hs-application-sidebar" className="
        -translate-x-full transition-all duration-300 transform
        w-65 h-full
        fixed inset-y-0 start-0 z-60
        bg-white border-e border-gray-200
        lg:block lg:translate-x-0 lg:end-auto lg:bottom-0" role="dialog" aria-label="Sidebar">
        <div className="relative flex flex-col h-full max-h-full">
            {/* <div className="px-6 pt-4 flex items-center">

                <div className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" aria-label="Preline">
                    <Link href={"/"}>
                        Big Books

                    </Link>
                </div>

            </div> */}

            <Link href={"/"} >
                <Logo width={260} rounded={false}/>
            </Link>


            {/* Divider */}
            <div className="h-[4] w-full bg-primary opacity-50"></div>


            {/* Content */}
            <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="flex flex-col space-y-1">


                        <Link className={btnClass} href={href(Page.Overview)}>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            Dashboard
                        </Link>


                        <Link className={btnClass} href={href(Page.Employee)}>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Employees
                        </Link>


                        <Link className={btnClass} href={href(Page.Payroll)}>
                            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                            Payroll
                        </Link>



                    </ul>
                </nav>
            </div>
            {/* End Content */}
        </div>
    </div>)

}


