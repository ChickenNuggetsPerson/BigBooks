'use server'


import { redirectIfInvalidSession } from "@/auth/auth"
import { getDispEmployee } from "@/database/models/DisplayModels"
import { prisma } from "@/database/prisma"






export default async function getEmployeeProps(empUUID: string, stripSensitive: boolean) {

    await redirectIfInvalidSession()

    try {
        const employee = await prisma.employee.findUniqueOrThrow({where: {uuid: empUUID}})
        return getDispEmployee(employee, stripSensitive)
    } catch (err) {
        console.log(err)
        return null
    }
}