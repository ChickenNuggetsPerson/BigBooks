'use server'

import { getEM } from "@/database/db";
import { Employee, Organization } from "@/database/models/Models";
import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const companyNames = [
    "Tech Pioneers Inc.", "Innovate Solutions", "Future Ventures LLC", "Nexus Enterprises", "Quantum Systems"
];

const addresses = [
    "456 Elm St, Silicon Valley, CA", "789 Pine Rd, New York, NY", "101 Maple Ave, Austin, TX", "202 Birch Ln, Miami, FL", "303 Cedar Blvd, Denver, CO"
];

const getRandomElement = (array : string[]) => array[Math.floor(Math.random() * array.length)];


export default async function createDevOrg() {

    const em = await getEM();
    const org = new Organization();
    org.name = getRandomElement(companyNames);
    org.notes = "";
    org.address = getRandomElement(addresses);
    org.uuid = randomUUID()
    org.periodsPerYear = 26
    org.periodsRefDate = new Date(2025, 3, 20, 0, 0, 0)
    em.persist(org);

    const employees = [
        {
            firstName: "Alice",
            lastName: "Johnson",
            email: "alice.johnson@email.com",
            address: "5678 Oak St, Maplewood, CA",
            hourlyRates: [{ name: "Standard", rate: 25 }],
            ssn: "234-56-7890"
        },
        {
            firstName: "Bob",
            lastName: "Smith",
            email: "bob.smith@email.com",
            address: "9101 Pine Ave, Sunnyvale, FL",
            hourlyRates: [{ name: "Overtime", rate: 30 }],
            ssn: "345-67-8901"
        },
        {
            firstName: "Charlie",
            lastName: "Davis",
            email: "charlie.davis@email.com",
            address: "1213 Cedar Rd, Austin, TX",
            hourlyRates: [{ name: "Weekend", rate: 28 }],
            ssn: "456-78-9012"
        },
        {
            firstName: "Diana",
            lastName: "Miller",
            email: "diana.miller@email.com",
            address: "1415 Birch Blvd, Denver, CO",
            hourlyRates: [{ name: "Night Shift", rate: 32 }],
            ssn: "567-89-0123"
        },
        {
            firstName: "Ethan",
            lastName: "Brown",
            email: "ethan.brown@email.com",
            address: "1617 Redwood Ln, Portland, OR",
            hourlyRates: [{ name: "Holiday", rate: 35 }],
            ssn: "678-90-1234"
        },
        {
            firstName: "Fiona",
            lastName: "Wilson",
            email: "fiona.wilson@email.com",
            address: "1820 Spruce Ct, Seattle, WA",
            hourlyRates: [{ name: "Standard", rate: 27 }, { name: "Overtime", rate: 40 }],
            ssn: "789-01-2345"
        },
        {
            firstName: "George",
            lastName: "Anderson",
            email: "george.anderson@email.com",
            address: "2021 Elm St, Chicago, IL",
            hourlyRates: [{ name: "Weekend", rate: 30 }],
            ssn: "890-12-3456"
        },
        {
            firstName: "Hannah",
            lastName: "Martinez",
            email: "hannah.martinez@email.com",
            address: "2223 Maple Ave, Miami, FL",
            hourlyRates: [{ name: "Night Shift", rate: 33 }],
            ssn: "901-23-4567"
        },
        {
            firstName: "Ian",
            lastName: "Clark",
            email: "ian.clark@email.com",
            address: "2425 Oak Dr, San Diego, CA",
            hourlyRates: [{ name: "Standard", rate: 26 }, { name: "Holiday", rate: 38 }],
            ssn: "012-34-5678"
        },
        {
            firstName: "Jessica",
            lastName: "Harris",
            email: "jessica.harris@email.com",
            address: "2627 Pine Blvd, Houston, TX",
            hourlyRates: [{ name: "Standard", rate: 29 }],
            ssn: "123-45-6789"
        },
        {
            firstName: "Kevin",
            lastName: "Lewis",
            email: "kevin.lewis@email.com",
            address: "2829 Cedar Rd, Phoenix, AZ",
            hourlyRates: [{ name: "Night Shift", rate: 34 }, { name: "Overtime", rate: 42 }],
            ssn: "234-56-7891"
        },
        {
            firstName: "Laura",
            lastName: "King",
            email: "laura.king@email.com",
            address: "3031 Birch Ln, Boston, MA",
            hourlyRates: [{ name: "Weekend", rate: 28 }],
            ssn: "345-67-8902"
        },
        {
            firstName: "Michael",
            lastName: "Wright",
            email: "michael.wright@email.com",
            address: "3233 Redwood Ave, Atlanta, GA",
            hourlyRates: [{ name: "Standard", rate: 27 }],
            ssn: "456-78-9013"
        },
        {
            firstName: "Natalie",
            lastName: "Scott",
            email: "natalie.scott@email.com",
            address: "3435 Spruce St, Detroit, MI",
            hourlyRates: [{ name: "Overtime", rate: 31 }],
            ssn: "567-89-0124"
        },
        {
            firstName: "Oscar",
            lastName: "White",
            email: "oscar.white@email.com",
            address: "3637 Elm Ct, San Francisco, CA",
            hourlyRates: [{ name: "Holiday", rate: 36 }],
            ssn: "678-90-1235"
        },
        {
            firstName: "Paige",
            lastName: "Roberts",
            email: "paige.roberts@email.com",
            address: "3839 Maple Dr, Denver, CO",
            hourlyRates: [{ name: "Standard", rate: 29 }, { name: "Night Shift", rate: 37 }],
            ssn: "789-01-2346"
        },
        {
            firstName: "Quentin",
            lastName: "Evans",
            email: "quentin.evans@email.com",
            address: "4041 Oak St, Portland, OR",
            hourlyRates: [{ name: "Weekend", rate: 30 }],
            ssn: "890-12-3457"
        },
        {
            firstName: "Rachel",
            lastName: "Turner",
            email: "rachel.turner@email.com",
            address: "4243 Cedar Blvd, Seattle, WA",
            hourlyRates: [{ name: "Overtime", rate: 32 }],
            ssn: "901-23-4568"
        },
        {
            firstName: "Samuel",
            lastName: "Nelson",
            email: "samuel.nelson@email.com",
            address: "4445 Birch Ct, Austin, TX",
            hourlyRates: [{ name: "Standard", rate: 26 }],
            ssn: "012-34-5679"
        },
        {
            firstName: "Tina",
            lastName: "Adams",
            email: "tina.adams@email.com",
            address: "4647 Redwood Ave, Miami, FL",
            hourlyRates: [{ name: "Night Shift", rate: 35 }],
            ssn: "123-45-6790"
        }
    ];

    const shuffledEmployees = [...employees].sort(() => Math.random() - 0.5);
    const selectedEmployees = shuffledEmployees.slice(0, Math.floor(Math.random() * employees.length) + 1);

    for (const data of selectedEmployees) {
        const employee = new Employee();
        employee.uuid = randomUUID()
        employee.firstName = data.firstName;
        employee.lastName = data.lastName;
        employee.email = data.email;
        employee.organization = org;
        employee.address = data.address;
        employee.hourlyRates = data.hourlyRates;
        employee.salary = Math.floor(Math.random() * 100000);
        employee.isSalary = (Math.floor(Math.random() * 10000) % 2 == 0)
        employee.ssn = data.ssn;
        em.persist(employee);
    }

    await em.flush();
    
    revalidatePath("/")
    redirect("/")
}