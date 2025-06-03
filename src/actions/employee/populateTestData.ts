'use server'

import { getSession } from "@/auth/auth";
import { prisma } from "@/database/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";






export default async function populateTestData() {

    if (process.env.NODE_ENV !== "development") { return }
    const session = await getSession()
    if (!session) { return }

    const res = await fetch('https://dummyjson.com/users')
    const json = await res.json()


    for (const user of json.users) {
        try {
            await prisma.employee.create({
                data: {
                    firstName: user.firstName || '',
                    middleName: user.maidenName || '',
                    lastName: user.lastName || '',
                    email: user.email || '',
                    phoneNumber: user.phone || '',
                    ssn: user.ssn || '',
                    address: user.address ? `${user.address.address}, ${user.address.city}, ${user.address.stateCode} ${user.address.postalCode}` : '',
                    hourlyRates: [{ name: "Regular", rate: Math.floor(Math.random() * 40) }], 
                    organizationId: session.orgUUID,
                    salary: Math.floor(Math.random() * 100000),
                    isSalary: Math.floor(Math.random() * 100) % 2 == 0,
                    dependants: Math.floor(Math.random() * 5)
                },
            });

            console.log(`Created employee: ${user.firstName} ${user.lastName}`);
        } catch (error) {
            console.error(`Failed to create employee: ${user.firstName} ${user.lastName}`);
            console.error(error);
        }
    }

    revalidatePath("/organization/employee")
    redirect("/organization/employee")
}