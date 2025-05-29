



export enum RoleTypes {
    Error = "Error",
    Viewer = "Viewer",
    Editor = "Editor",
    Admin = "Admin",
    SysAdmin = "System Admin"
}

export interface DispRole {
    type: RoleTypes
    level: number
    color: string
    userUUID: string
    orgUUID: string
}

function genRole(type: RoleTypes, color: string) : DispRole {
    return {
        type: type,
        level: getRoleLevel(type),
        color: color,
        userUUID: "",
        orgUUID: ""
    }
}


export const Role_Error =  genRole(RoleTypes.Error,  "#101010")
export const Role_Viewer = genRole(RoleTypes.Viewer, "#E5A797")
export const Role_Editor = genRole(RoleTypes.Editor, "#A5E6BD")
export const Role_Admin =  genRole(RoleTypes.Admin,  "#8DA0E6")
export const Role_SysAdmin = genRole(RoleTypes.SysAdmin, "linear-gradient(90deg,rgba(183, 129, 222, 1) 0%, rgba(250, 155, 155, 1) 50%, rgba(247, 207, 151, 1) 100%)")


function getRoleLevel(roleType: RoleTypes) {
    switch (roleType) {
        case RoleTypes.Viewer:
            return 1
        case RoleTypes.Editor:
            return 2
        case RoleTypes.Admin:
            return 3
        case RoleTypes.SysAdmin:
            return 10
        default:
            return -1
    }
}



export function getRoleFromID(id: string) {
    switch (id) {
        case "viewer":
            return structuredClone(Role_Viewer)
        case "editor":
            return structuredClone(Role_Editor)
        case "admin":
            return structuredClone(Role_Admin)
        default:
            return structuredClone(Role_Error)
    }
}
export function getIDFromRole(r: DispRole) {
    return getIDFromRoleType(r.type)
}
export function getIDFromRoleType(r: RoleTypes) {
    switch (r) {
        case RoleTypes.Viewer:
            return "viewer"
        case RoleTypes.Editor:
            return "editor"
        case RoleTypes.Admin:
            return "admin"
        default:
            return "error"
    }
}

export function RoleMeetsLevel(r: DispRole, level: RoleTypes) {
    return r.level >= getRoleLevel(level)
}