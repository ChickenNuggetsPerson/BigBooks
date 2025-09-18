

const create = "create"
const view = "view"
const edit = "edit"
const del = "delete"

const activate = "activate"
const deactivate = "deactivate"
const lock = "lock"
const unlock = "unlock"
const submit = "submit"

const Perms = {
    admin: {
        organization: {
            deactivate,
            activate
        },
        orgItem: { // Org wide payroll items
            view,
            edit
        },
        taxes: { // Org specific taxes
            create,
            view,
            edit,
            del,
            activate,
            deactivate
        },
        users: { // Org Users
            create,
            view,
            edit,
            del
        },
    },
    org: { // Org details
        view,
        edit
    },
    employee: {
        create,
        deactivate,
        activate,
        personal: {
            view,
            edit,
        },
        tax: {
            view,
            edit,
        },
        compensation: {
            view,
            edit,
        },
        items: {
            view,
            edit,
        },
        sensitive: {
            ssn: {
                view,
                edit
            }
        }
    },
    payroll: {
        paystub: {
            view,
            edit,
            del,
            lock,
            unlock,
            submit
        },
        payrollGroup: { // Org Payroll groups
            create,
            view,
            edit,
            del,
            items: {
                view,
                edit
            }
        },
    }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expandPermissions<T extends Record<string, any>>(obj: T, path: string[] = []): any {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: Record<string, any> = {};

    for (const key in obj) {
        const value = obj[key];
        const newPath = [...path, key];

        if (typeof value === "string") {
            result[key] = newPath.join(".");
        } else if (typeof value === "object" && value !== null) {
            result[key] = expandPermissions(value, newPath);
        }
    }

    return result;
}

export const Permissions = expandPermissions(Perms) as typeof Perms