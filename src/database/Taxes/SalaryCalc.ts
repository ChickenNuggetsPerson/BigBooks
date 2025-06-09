import { Prisma } from "../generated/prisma"





export function CalcStubSalary(salary: Prisma.Decimal, daysBetweenDates: number) {
    const amtPerYear = new Prisma.Decimal(365).div(daysBetweenDates).floor()
    return salary.div(amtPerYear)
}