'use server'

import { getSession } from "@/auth/auth";
import { RoleTypes } from "@/auth/roles/Roles";
import { throwIfInsufficientPerms } from "@/auth/roles/throwIfInsufficientPerms";
import { Prisma } from "@/database/generated/prisma";
import { prisma } from "@/database/prisma";
import { randomUUID } from "crypto";




export default async function upsertEmployeeCompensation(compData: Prisma.EmployeeCompensationGetPayload<{ include: { hourlyRates: true } }>) {

    await throwIfInsufficientPerms(RoleTypes.Editor)
    const session = await getSession()
    if (!session) { return }

    const c = await prisma.employeeCompensation.findUnique({ where: { uuid: compData.uuid }, include: { hourlyRates: true } })

    if (c) { // Edit Comp

        await prisma.employeeCompensation.update({
            where: { uuid: c.uuid },
            data: {
                isSalary: compData.isSalary,
                salaryAmount: compData.salaryAmount,
                description: compData.description
            }
        })

        const currentRates = c.hourlyRates
        const newRates = compData.hourlyRates

        const removedRates = currentRates.filter((r) => newRates.findIndex(rate => rate.uuid == r.uuid) == -1)

        for (let i = 0; i < newRates.length; i++) { // Create or update the new entries 
            const rate = newRates[i]

            await prisma.hourlyRate.upsert({
                where: { uuid: rate.uuid },
                create: {
                    name: rate.name,
                    rate: rate.rate,
                    canOvertime: rate.canOvertime,
                    compensationId: rate.compensationId
                },
                update: {
                    name: rate.name,
                    rate: rate.rate,
                    canOvertime: rate.canOvertime
                }
            })
        }

        // Delete the unincluded rates
        for (let i = 0; i < removedRates.length; i++) { // Create or update the new entries 
            const rate = removedRates[i]
            await prisma.hourlyRate.delete({ where: { uuid: rate.uuid }})
        }

    } else { // New Comp

        const comp = await prisma.employeeCompensation.create({
            data: {
                employeeId: compData.employeeId,
                payrollGroupId: compData.payrollGroupId,
                isSalary: compData.isSalary,
                salaryAmount: compData.salaryAmount,
                description: compData.description
            }
        })

        // If new compensation entry, then it cannot have any rates already in the database
        // -> So we just need to create them in the database

        const rates = compData.hourlyRates
        for (let i = 0; i < rates.length; i++) {
            rates[i].uuid = randomUUID()
            rates[i].compensationId = comp.uuid // Make sure it links correctly
        }
        await prisma.hourlyRate.createMany({
            data: rates,
            skipDuplicates: true
        })
    }
}