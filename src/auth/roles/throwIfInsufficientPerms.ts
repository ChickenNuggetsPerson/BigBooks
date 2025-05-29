import getOrgRole from "./getOrgRole";
import { RoleMeetsLevel, RoleTypes } from "./Roles";







// To be run in server functions
export async function throwIfInsufficientPerms(level: RoleTypes) {

    const role = await getOrgRole()

    if (RoleMeetsLevel(role, level)) {
        return
    }

    throw new Error("Insufficient Permissions For Action");
}