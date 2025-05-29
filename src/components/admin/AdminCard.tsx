import Link from "next/link";









export default function AdminCard({ }) {
    return (
        <div className="card max-w-sm">
            <h5 className="mb-2 text-2xl font-semibold text-gray-700 ">Admin Tools:</h5>
            <div className="bg-accent h-px"></div>


            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/configureOrganization"}>
                Edit Organization Details
            </Link>

            <Link className="block px-4 py-2 hover:bg-gray-100 rounded-lg" href={"/organization/admin/users"}>
                Configure Users
            </Link>

        </div>

    )
}