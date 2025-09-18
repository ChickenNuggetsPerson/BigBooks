import crypto from "crypto";
import { throwIfInsufficientPerms } from "@/auth/permissions/PermissionsFunctions";
import { Permissions } from "@/auth/permissions/PermissionsDef";
import { prisma } from "./prisma";
import { getSession } from "@/auth/auth";
import { Prisma } from "./generated/prisma";

const algorithm = "aes-256-gcm";
const key = Buffer.from(process.env.SSN_KEY!, "hex");

function encryptSSN(ssn: string) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(ssn, "utf8", "hex");
    encrypted += cipher.final("hex");
    const tag = cipher.getAuthTag().toString("hex");
    return {
        ssnEnc: encrypted,
        ssnIv: iv.toString("hex"),
        ssnTag: tag,
    };
}

function decryptSSN(ssnEnc: string, ssnIv: string, ssnTag: string) {
    const decipher = crypto.createDecipheriv(
        algorithm,
        key,
        Buffer.from(ssnIv, "hex")
    );
    decipher.setAuthTag(Buffer.from(ssnTag, "hex"));
    let decrypted = decipher.update(ssnEnc, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
}


async function setEmployeeSSN(employeeUUID: string, newSSN: string) {
    const session = await getSession()
    if (!session) {
        throw new Error("Insufficient Permissions")
    }

    const employee = await prisma.employee.findUnique({
        where: {
            uuid: employeeUUID, organizationId: session.orgUUID
        },
        select: {
            sensitive: true,
            organizationId: true,
            uuid: true
        }
    })
    if (!employee) {
        throw new Error("Insufficient Permissions")
    }

    await throwIfInsufficientPerms(Permissions.employee.sensitive.ssn.edit, employee.organizationId)
    
    const data = encryptSSN(newSSN)

    await prisma.employeeSensitive.upsert({
        where: { employeeId: employee.uuid },
        update: {
            ssnEnc: data.ssnEnc,
            ssnIv: data.ssnIv,
            ssnTag: data.ssnTag
        },
        create: {
            employeeId: employee.uuid,
            ssnEnc: data.ssnEnc,
            ssnIv: data.ssnIv,
            ssnTag: data.ssnTag
        }
    })
}

async function getEmployeeSSN(employeeUUID: string, full: boolean) {

    const session = await getSession()
    if (!session) {
        throw new Error("Insufficient Permissions")
    }

    const employee = await prisma.employee.findUnique({
        where: {
            uuid: employeeUUID, organizationId: session.orgUUID
        },
        select: {
            sensitive: true,
            organizationId: true
        }
    })
    if (!employee) {
        throw new Error("Insufficient Permissions")
    }

    if (!employee.sensitive) {
        throw new Error("Insufficient Permissions")
    }

    if (full) {
        await throwIfInsufficientPerms(Permissions.employee.sensitive.ssn.view, employee.organizationId)
    } else {
        await throwIfInsufficientPerms(Permissions.employee.tax.view, employee.organizationId)
    }

    return decryptSSN(
        employee.sensitive.ssnEnc ?? "",
        employee.sensitive.ssnIv ?? "",
        employee.sensitive.ssnTag ?? ""
    )
}


export function hideSSN(str: string) {

    const newStr = []
    const sub = str.split("-")

    for (let i = 0; i < sub.length; i++) {

        if (i  == sub.length - 1) {
            newStr.push(sub[i])
        } else {
            newStr.push(sub[i].replaceAll(/./g, "*"))
        }
    }

    return newStr.join("-")
}





export const SSNPrismaExtension = Prisma.defineExtension({
    name: "SSN Extension",
    model: {
        user: {
            async getSSNFull(userUUID: string) {
                return await getEmployeeSSN(userUUID, true)
            },
            async getSSN(userUUID: string) {
                const ssn = await getEmployeeSSN(userUUID, false)
                return hideSSN(ssn)
            },
            async setSSN(userUUID: string, newSSN: string) {
                await setEmployeeSSN(userUUID, newSSN)
            }
        }
    }
})