import { DispRole, getRoleFromID } from "@/auth/roles/Roles";
import { Employee, Organization, Payperiod, PayStub, User } from "../generated/prisma/client";
import { prisma } from "../prisma";
import { FilingTypes } from "../Taxes/FilingTypes";
import { EmployeeHourlyRate, PaystubExtra, PaystubHourly } from "./SchemaJSON";



export interface DispEmployee {
    uuid: string;
    firstName: string;
    middleName: string;
    lastName: string;
    notes: string;
    address: string;
    isSalary: boolean;
    salary: number;
    hourlyRates: { name: string; rate: number }[];
    isDeleted: boolean;
    email: string;
    phoneNumber: string;
    orgUUID: string;
    ssn: string;
    filingStatus: FilingTypes;
    dependants: number;
}
export function getEmptyDispEmployee(name: string = ""): DispEmployee {
    return {
        uuid: "",
        firstName: name,
        middleName: "",
        lastName: "",
        notes: "",
        address: "",
        isSalary: true,
        salary: 0,
        hourlyRates: [],
        isDeleted: false,
        email: "",
        phoneNumber: "",
        orgUUID: "",
        ssn: "",
        filingStatus: FilingTypes.Single,
        dependants: 0
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
    employee.isSalary = e.isSalary
    employee.salary = Number(e.salary)

    if (Array.isArray(e.hourlyRates)) {
        employee.hourlyRates = e.hourlyRates as unknown as EmployeeHourlyRate[];
    }

    employee.isDeleted = e.isDeleted
    employee.email = e.email
    employee.phoneNumber = e.phoneNumber

    employee.orgUUID = e.organizationId;

    employee.filingStatus = e.filingStatus as FilingTypes
    employee.dependants = e.dependants

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
    periodsPerYear: number;
    periodsRefDate: Date;
}
export function getEmptyDispOrganization(name: string = ""): DispOrganization {
    return {
        uuid: "",
        name: name,
        notes: "",
        address: "",
        employeeCount: 0,
        isDeleted: false,
        periodsPerYear: 0,
        periodsRefDate: new Date()
    }
}
export async function getDispOrganization(o: Organization): Promise<DispOrganization> {
    const org = getEmptyDispOrganization()

    org.uuid = o.uuid
    org.name = o.name
    org.notes = o.notes
    org.address = o.address

    org.employeeCount = await prisma.employee.count({ where: { organizationId: o.uuid } })

    org.isDeleted = o.isDeleted
    org.periodsPerYear = o.periodsPerYear
    org.periodsRefDate = o.periodsRefDate

    return org
}



export interface DispPayPeriod {
    uuid: string;
    orgID: string;
    periodStart: Date;
    periodEnd: Date;
    includedEmployees: string[];
    payStubs: DispPaystub[]
}
export function getEmptyDispPayPeriod(): DispPayPeriod {
    return {
        uuid: "",
        orgID: "",
        periodStart: new Date(),
        periodEnd: new Date(),
        includedEmployees: [],
        payStubs: [],
    }
}
export async function getDispPayPeriod(p: Payperiod): Promise<DispPayPeriod> {
    const pay = getEmptyDispPayPeriod()

    pay.uuid = p.uuid
    pay.orgID = p.organizationId
    pay.periodStart = p.periodStart
    pay.periodEnd = p.periodEnd

    if (Array.isArray(p.includedEmployees)) {
        pay.includedEmployees = p.includedEmployees as unknown as string[];
    }

    pay.payStubs = (await prisma.payStub.findMany({ where: { payperiodId: p.uuid } })).map((stub) => { return getDispPaystub(stub, p) })

    return pay
}
export function generatePayperiodFromDate(orgRefDate: Date, perYear: number, date: Date): DispPayPeriod {

    let shiftAmt = 0

    if (perYear == 52) { // Weekly
        shiftAmt = 7
    } else { // Bi-Weekly
        shiftAmt = 14
    }

    let end = new Date(orgRefDate.toDateString())
    end.setHours(23, 59, 59)

    while (date > end) {
        end = end.addDays(shiftAmt)
    }

    const p = getEmptyDispPayPeriod()

    p.periodStart = new Date(end.addDays(1 - shiftAmt))
    p.periodEnd = new Date(end)

    p.periodStart.setHours(0, 0, 0)
    p.periodEnd.setHours(23, 59, 59)

    console.log(p.periodStart.toLocaleString())
    console.log(p.periodEnd.toLocaleString())

    return p
}
export function periodToStr(p: DispPayPeriod): string {
    function format(per: Date) {
        // return `${per.getMonth() + 1}/${per.getDate()}/${per.getFullYear()}`
        // return per.toLocaleString()
        return per.toLocaleDateString()
    }

    return format(p.periodStart) + " - " + format(p.periodEnd)
}




export interface DispPaystub {
    uuid: string

    hourly: PaystubHourly[]
    salary: number
    commission: number
    bonus: number

    periodStart: Date
    periodEnd: Date

    federalRate: number
    federalAmt: number
    stateRate: number
    stateAmt: number
    mediRate: number
    mediAmt: number
    socialRate: number
    socialAmt: number

    otherItems: PaystubExtra[]

    employeeUUID: string
    payperiodUUID: string
}
export function getEmptyDispPaystub(): DispPaystub {
    return {
        uuid: "",
        hourly: [],
        salary: 0,
        commission: 0,
        bonus: 0,
        periodStart: new Date(),
        periodEnd: new Date(),
        federalRate: 0,
        federalAmt: 0,
        stateRate: 0,
        stateAmt: 0,
        mediRate: 0,
        mediAmt: 0,
        socialRate: 0,
        socialAmt: 0,
        otherItems: [],
        employeeUUID: "",
        payperiodUUID: ""
    }
}
export function getDispPaystub(p: PayStub, period: Payperiod | null): DispPaystub {
    const stub = getEmptyDispPaystub()

    stub.uuid = p.uuid
    stub.hourly = p.hourly as unknown as PaystubHourly[]
    stub.salary = Number(p.salary)
    stub.commission = Number(p.commission)
    stub.bonus = Number(p.bonus)
    stub.federalRate = Number(p.federalRate)
    stub.federalAmt = Number(p.federalAmt)
    stub.stateRate = Number(p.stateRate)
    stub.stateAmt = Number(p.stateAmt)
    stub.mediRate = Number(p.mediRate)
    stub.mediAmt = Number(p.mediAmt)
    stub.socialRate = Number(p.socialRate)
    stub.socialAmt = Number(p.socialAmt)
    stub.otherItems = p.otherItems as unknown as PaystubExtra[]
    stub.employeeUUID = p.employeeId
    stub.payperiodUUID = p.payperiodId

    if (period) {
        stub.periodStart = period.periodStart
        stub.periodEnd = period.periodEnd
    }

    return stub
}


// Date Stuff
declare global {
    interface Date {
        addDays(days: number): Date;
    }
}

Date.prototype.addDays = function (days: number): Date {
    const result = new Date(this.valueOf());
    result.setDate(result.getDate() + days);
    return result;
};







export interface DispUser {
    uuid: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    isActive: boolean,
    memberships: DispRole[],
    allocatedOrganizations: number
}
export function getEmptyDispUser(): DispUser {
    return {
        uuid: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        isActive: false,
        memberships: [],
        allocatedOrganizations: 0
    }
}
export async function getDispUser(u: User) {
    const user = getEmptyDispUser()

    user.uuid = u.uuid
    user.firstName = u.firstName
    user.lastName = u.lastName
    user.email = u.email
    user.username = u.username
    user.isActive = u.isActive

    user.memberships = (await prisma.role.findMany({ where: { userId: user.uuid } })).map((r) => {
        const role = getRoleFromID(r.role)
        role.orgUUID = r.organizationId
        role.userUUID = r.userId

        return role
    }) // Kill ME

    user.allocatedOrganizations = u.allocatedOrganizations

    return user
}