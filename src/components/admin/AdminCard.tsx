import Link from "next/link";
import CollapsibleDiv from "../Decorative/CollapsibleDiv";









export default function AdminCard({ }) {
    return (
        <CollapsibleDiv title={"Admin Tools:"} className="card max-w-sm">
        
            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/configureOrganization"}>
                Edit Organization Details
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/users"}>
                Configure Users
            </Link>

        </CollapsibleDiv>

    )
}