import { Employee, Organization, Payperiod } from "./Models";



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
    employee.isSalary = e.isSalary
    employee.salary = e.salary
    employee.hourlyRates = e.hourlyRates
    employee.isDeleted = e.isDeleted
    employee.email = e.email
    employee.phoneNumber = e.phoneNumber
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
    org.employeeCount = await o.employees.loadCount()
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
    payStubs: string[]
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
    pay.orgID = p.organization.uuid
    pay.periodStart = p.periodStart
    pay.periodEnd = p.periodEnd
    pay.includedEmployees = p.includedEmployees
    pay.payStubs = (await p.payStubs.load()).map((stub) => { return stub.uuid }) // Only send array of stub UUIDs

    return pay
}
export function generatePayperiodFromDate(orgRefDate: Date, perYear: number, date: Date) : DispPayPeriod {

    let shiftAmt = 0

    if (perYear == 52) { // Weekly
        shiftAmt = 7
    } else { // Bi-Weekly
        shiftAmt = 14
    }    

    let end = new Date(orgRefDate)

    while (date > end) {
        end = end.addDays(shiftAmt)
    }

    const p = getEmptyDispPayPeriod()
    p.periodStart = new Date(end.addDays(1 - shiftAmt))
    p.periodEnd = new Date(end)

    return p
}
export function periodToStr(p: DispPayPeriod) : string {
    function format(per: Date) {
        return `${per.getMonth() + 1}/${per.getDate()}/${per.getFullYear()}`
    }

    return format(p.periodStart) + " - " + format(p.periodEnd)
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
