import { Employee, PayStubItem } from "@/database/generated/prisma";










export function calcTaxRates(employee: Employee): PayStubItem[] {

    console.log("Calc Rates for: ", employee.firstName)

    return []
}