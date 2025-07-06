import getOrgRole from "@/auth/roles/getOrgRole"
import { Role_Admin } from "@/auth/roles/Roles"
import AdminCard from "@/components/admin/AdminCard"



export default async function OrganizationAdminToolsCard() {

    const role = await getOrgRole()

    return (
        <>
            {role.level >= Role_Admin.level && <AdminCard />}
        </>
    )
}