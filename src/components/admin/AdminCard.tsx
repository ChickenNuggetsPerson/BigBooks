import Link from "next/link";
import CollapsibleDiv from "../Decorative/CollapsibleDiv";









export default function AdminCard({ }) {
    return (
        <CollapsibleDiv title={<p className="mb-2 text-2xl font-normal text-gray-700 select-none">Admin Tools:</p>} className="card max-w-sm">
        
            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/configure"}>
                Edit Organization Details
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/defaults"}>
                Organization Payroll Items
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/groups"}>
                Payroll Groups
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/taxes"}>
                Organization Taxes
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/users"}>
                Configure Users
            </Link>

        </CollapsibleDiv>

    )
}