'use server'

import { getEM } from "@/database/db"
import { Employee, Organization } from "@/database/models/Models"
import { UUID } from "crypto"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"


export default async function submitEmployeeForm(newEmployee: boolean, formData: FormData) {


    const orgUUID = formData.get("orgUUID") as string
    const uuid = formData.get("uuid") as string

    const firstName = formData.get("firstName") as string
    const middleName = formData.get("middleName") as string
    const lastname = formData.get("lastName") as string

    const email = formData.get("email") as string
    const phoneNumber = formData.get("phoneNumber") as string

    const notes = formData.get("notes") as string
    const address = formData.get("address") as string
    const ssn = formData.get("ssn") as string

    // let isDeleted = false
    // if (formData.get("isDeleted")) {
    //     const d = formData.get("isDeleted")
    //     if (d == "true") { isDeleted = true } else { isDeleted = false }
    // }

    const em = await getEM();

    // console.log(formData)

    if (newEmployee) {
        try {
            const organization = await em.findOneOrFail(Organization, { uuid: (orgUUID as UUID) })

            const employee = new Employee();
            employee.organization = organization;

            employee.uuid = crypto.randomUUID() as UUID
            employee.firstName = firstName
            employee.middleName = middleName
            employee.lastName = lastname
            employee.notes = notes
            employee.address = address
            employee.ssn = ssn
            employee.email = email
            employee.phoneNumber = phoneNumber
            employee.isDeleted = false

            // employee.hourlyRates = [{ name: "Standard", rate: 20 }];
            em.persist(employee);

            await em.flush();


        } catch (err) { console.log(err) }
    } else {
        try {
            const employee = await em.findOneOrFail(Employee, { uuid: (uuid as UUID) })
            employee.firstName = firstName
            employee.middleName = middleName
            employee.lastName = lastname
            employee.notes = notes
            employee.address = address
            employee.ssn = ssn
            employee.email = email
            employee.phoneNumber = phoneNumber
            // employee.isDeleted = isDeleted

            await em.flush()

        } catch (err) { console.log(err) }

    }

    revalidatePath(`/organization/employee`)
    revalidatePath(`/organization/employee/${uuid}`)
    redirect(`/organization/employee/${uuid}`)
}