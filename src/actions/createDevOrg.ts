'use server'


import { redirectIfInvalidSession } from "@/auth/auth";
import { prisma } from "@/database/prisma";
import { FilingTypes } from "@/database/Taxes/FilingTypes";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


const companyNames = [
    "Tech Pioneers Inc.", "Innovate Solutions", "Future Ventures LLC", "Nexus Enterprises", "Quantum Systems"
];

const addresses = [
    "456 Elm St, Silicon Valley, CA", "789 Pine Rd, New York, NY", "101 Maple Ave, Austin, TX", "202 Birch Ln, Miami, FL", "303 Cedar Blvd, Denver, CO"
];

const employees = [
    {
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@email.com",
        address: "5678 Oak St, Maplewood, CA",
        hourlyRates: [{ name: "Standard", rate: 25 }],
        ssn: "234-56-7890",
    },
    {
        firstName: "Brian",
        lastName: "Kim",
        email: "brian.kim@email.com",
        address: "1200 Sunset Blvd, Los Angeles, CA",
        hourlyRates: [{ name: "Standard", rate: 28 }, { name: "Overtime", rate: 42 }],
        ssn: "321-45-6789",
    },
    {
        firstName: "Cynthia",
        lastName: "Lopez",
        email: "c.lopez@email.com",
        address: "305 River Rd, Austin, TX",
        hourlyRates: [{ name: "Standard", rate: 22 }],
        ssn: "456-78-9012",
    },
    {
        firstName: "David",
        lastName: "Nguyen",
        email: "david.nguyen@email.com",
        address: "99 Bay St, San Francisco, CA",
        hourlyRates: [{ name: "Standard", rate: 30 }],
        ssn: "567-89-0123",
    },
    {
        firstName: "Emma",
        lastName: "Brown",
        email: "emma.brown@email.com",
        address: "88 Forest Dr, Portland, OR",
        hourlyRates: [{ name: "Standard", rate: 27 }, { name: "Holiday", rate: 40 }],
        ssn: "678-90-1234",
    },
    {
        firstName: "Frank",
        lastName: "Garcia",
        email: "frank.g@email.com",
        address: "700 Ocean Ave, Miami, FL",
        hourlyRates: [{ name: "Standard", rate: 24 }],
        ssn: "789-01-2345",
    },
    {
        firstName: "Grace",
        lastName: "Lee",
        email: "grace.lee@email.com",
        address: "55 Pine St, Seattle, WA",
        hourlyRates: [{ name: "Standard", rate: 26 }, { name: "Weekend", rate: 38 }],
        ssn: "890-12-3456",
    },
    {
        firstName: "Henry",
        lastName: "Martinez",
        email: "henry.m@email.com",
        address: "431 Elm St, Chicago, IL",
        hourlyRates: [{ name: "Standard", rate: 29 }],
        ssn: "901-23-4567",
    },
    {
        firstName: "Isabella",
        lastName: "Smith",
        email: "isabella.smith@email.com",
        address: "123 Main St, Denver, CO",
        hourlyRates: [{ name: "Standard", rate: 23 }],
        ssn: "012-34-5678",
    },
    {
        firstName: "Jack",
        lastName: "Thompson",
        email: "jack.thompson@email.com",
        address: "987 Cedar Ave, Boise, ID",
        hourlyRates: [{ name: "Standard", rate: 31 }],
        ssn: "234-56-7891",
    },
    {
        firstName: "Kelly",
        lastName: "White",
        email: "kelly.white@email.com",
        address: "44 Aspen Way, Salt Lake City, UT",
        hourlyRates: [{ name: "Standard", rate: 26 }],
        ssn: "345-67-8901",
    },
    {
        firstName: "Liam",
        lastName: "Davis",
        email: "liam.davis@email.com",
        address: "66 Ridge Rd, Helena, MT",
        hourlyRates: [{ name: "Standard", rate: 27 }, { name: "Holiday", rate: 41 }],
        ssn: "456-78-9013",
    },
    {
        firstName: "Mia",
        lastName: "Clark",
        email: "mia.clark@email.com",
        address: "77 Meadow Ln, Atlanta, GA",
        hourlyRates: [{ name: "Standard", rate: 24 }],
        ssn: "567-89-0124",
    },
    {
        firstName: "Noah",
        lastName: "Wright",
        email: "noah.wright@email.com",
        address: "22 Birch Dr, Philadelphia, PA",
        hourlyRates: [{ name: "Standard", rate: 29 }, { name: "Overtime", rate: 43 }],
        ssn: "678-90-1235",
    },
    {
        firstName: "Olivia",
        lastName: "King",
        email: "olivia.king@email.com",
        address: "1010 Palm St, Tampa, FL",
        hourlyRates: [{ name: "Standard", rate: 26 }],
        ssn: "789-01-2346",
    },
    {
        firstName: "Peter",
        lastName: "Hall",
        email: "peter.hall@email.com",
        address: "88 North Ave, Minneapolis, MN",
        hourlyRates: [{ name: "Standard", rate: 25 }, { name: "Night Shift", rate: 37 }],
        ssn: "890-12-3457",
    },
];


const getRandomElement = (array: string[]) => array[Math.floor(Math.random() * array.length)];


export default async function createDevOrg() {

    await redirectIfInvalidSession()

    // Create Organization
    const org = await prisma.organization.create({
        data: {
            name: getRandomElement(companyNames),
            notes: "",
            address: getRandomElement(addresses),
            periodsPerYear: 26,
            periodsRefDate: new Date(2025, 3, 20, 0, 0, 0),
        },
    });

    const shuffledEmployees = [...employees].sort(() => Math.random() - 0.5);
    const selectedEmployees = shuffledEmployees.slice(
        0,
        Math.floor(Math.random() * employees.length) + 1
    );

    for (const data of selectedEmployees) {
        await prisma.employee.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                hourlyRates: data.hourlyRates, // store as Json
                salary: Math.floor(Math.random() * 100000),
                isSalary: Math.random() < 0.5,
                ssn: data.ssn,
                filingStatus: Math.random() < 0.5 ? FilingTypes.Joint : FilingTypes.Single,
                dependants: Math.floor(Math.random() * 5),
                organizationId: org.uuid
            },
        });
    }

    revalidatePath("/")
    redirect("/")
}