'use server'

import { getEM } from "@/database/db"
import { getDispEmployee, getEmptyDispEmployee } from "@/database/models/DisplayModels"
import { Employee, Organization } from "@/database/models/Models"
import { UUID } from "crypto"




export default async function getEmployeeList(orgUUID: string, showDeleted: boolean) {

    const em = await getEM();
    const organization = await em.findOne(Organization, { uuid: (orgUUID as UUID) })

    if (organization) {
        

        let list = (await organization.employees.load()).map((e: Employee) => { return getDispEmployee(e, true) })

        list = list.filter((e) => { return e.isDeleted == showDeleted })

        list = list.sort((a, b) => {
            if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) { return 1 }
            if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) { return -1 }
            return 0
        })

        return list
    } else {
        return [getEmptyDispEmployee("Error")]
    }
}