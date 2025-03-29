'use server'


import { getEM } from "@/database/db";
import { getDispEmployee } from "@/database/models/DisplayModels"
import { Employee } from "@/database/models/Models"
import { UUID } from "crypto"






export default async function getEmployeeProps(empUUID: string, stripSensitive: boolean) {
    try {
        const em = await getEM();
        const employee = await em.findOneOrFail(Employee, { uuid: ( empUUID as UUID ) })
        return getDispEmployee(employee, stripSensitive)
    } catch (err) {
        console.log(err)
        return null
    }
}