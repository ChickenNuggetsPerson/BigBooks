import { Role_Admin, Role_Editor, Role_Viewer, RoleTypes } from "@/auth/roles/Roles"



export function getRoleDescription(r: RoleTypes) {
    switch (r) {
        case RoleTypes.Viewer:
            return `As a viewer, you can view employee data and payroll items.`
        case RoleTypes.Editor:
            return `As an editor, you can edit employee data and payroll items.`
        case RoleTypes.Admin:
            return `As an admin, you will have all permissions of an editor and viewer. You will also be able to edit the roles of other users associated with this organization.`
        default:
            return ""
    }
}
export const selectableRoles = [
    {
        label: Role_Viewer.type,
        id: Role_Viewer.type
    },
    {
        label: Role_Editor.type,
        id: Role_Editor.type
    },
    {
        label: Role_Admin.type,
        id: Role_Admin.type
    }
]