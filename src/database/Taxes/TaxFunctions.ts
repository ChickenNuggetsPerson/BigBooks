import { Employee, PayStubItem } from "../generated/prisma";







// TODO: Link this to the employee some how. So then totals can be seen for the different tax types
export function calcEmployeeTaxes(employee: Employee) : PayStubItem[] {
    console.log(employee)
    return []
}