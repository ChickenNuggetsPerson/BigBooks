import { Employee, Organization } from "./Models";



export interface DispEmployee {
    uuid: string;
    firstName: string;
    middleName: string;
    lastName: string;
    notes: string;
    address: string;
    hourlyRates: { name: string; rate: number }[],
    isDeleted: boolean;
    email: string;
    orgUUID: string;
    ssn: string;
}

export function getEmptyDispEmployee(name: string = ""): DispEmployee {
    return {
        uuid: "",
        firstName: name,
        middleName: "",
        lastName: "",
        notes: "",
        address: "",
        hourlyRates: [],
        isDeleted: false,
        email: "",
        orgUUID: "",
        ssn: ""
    }
}

export function getDispEmployee(e: Employee, stripSensitive: boolean = true): DispEmployee {
    const employee = getEmptyDispEmployee()

    employee.uuid = e.uuid
    employee.firstName = e.firstName
    employee.middleName = e.middleName
    employee.lastName = e.lastName
    employee.notes = e.notes
    employee.address = e.address
    employee.hourlyRates = e.hourlyRates
    employee.isDeleted = e.isDeleted
    employee.email = e.email
    employee.orgUUID = e.organization.uuid

    if (!stripSensitive) {
        employee.ssn = e.ssn
    }

    return employee
}




export interface DispOrganization {
    uuid: string;
    name: string;
    notes: string;
    address: string;
    employeeCount: number;
    isDeleted: boolean;
}
export function getEmptyDispOrganization(name: string = "") : DispOrganization {
    return {
        uuid: "",
        name: name,
        notes: "",
        address: "",
        employeeCount: 0,
        isDeleted: false
    }
}
export async function getDispOrganization(o: Organization) : Promise<DispOrganization> {
    const org = getEmptyDispOrganization()

    org.uuid = o.uuid
    org.name = o.name
    org.notes = o.notes
    org.address = o.address
    org.employeeCount = await o.employees.loadCount()
    org.isDeleted = o.isDeleted

    return org
}