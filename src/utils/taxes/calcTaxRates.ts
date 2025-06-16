import { Employee, Organization, PayStubItem } from "@/database/generated/prisma";










export function calcTaxRates(employee: Employee, organization: Organization, payDate: Date): PayStubItem[] {

    console.log("Calc Rates for: ", employee.firstName, organization.name, payDate)

    return []
}