import { PayStubItem, PayStubItemType, Prisma } from "@/database/generated/prisma";



export function sanitizeDecimals<T>(obj: T): T {
    if (obj instanceof Prisma.Decimal) {
        // Convert Decimal to number
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return obj.toNumber() as any as T
    }

    if (Array.isArray(obj)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return obj.map(sanitizeDecimals) as any as T
    }

    if (typeof obj === 'object' && obj !== null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = {}
        for (const [key, value] of Object.entries(obj)) {
            result[key] = sanitizeDecimals(value)
        }
        return result
    }

    return obj
}




function updatePaystubItemTotal(item: PayStubItem, gross: Prisma.Decimal) {

    if (item.rate && item.hours) {
        item.amount = item.rate.mul(item.hours)
    } else if (item.percent) {
        item.amount = new Prisma.Decimal(item.percent).mul(gross)
    }

    item.amount = item.amount.mul(100).floor().div(100)

    return item
}

export function updatePaystubTotals(stub: Prisma.PayStubGetPayload<{ include: { items: true } }>) {

    let gross = new Prisma.Decimal(0)
    let taxes = new Prisma.Decimal(0)
    let other = new Prisma.Decimal(0)

    // Update Gross pay and amts of earning items
    for (let i = 0; i < stub.items.length; i++) {
        if (stub.items[i].type == PayStubItemType.Earning) {
            stub.items[i] = updatePaystubItemTotal(stub.items[i], new Prisma.Decimal(0)) // Update
            gross = gross.add(stub.items[i].amount)
        }
    }

    for (let i = 0; i < stub.items.length; i++) {
        stub.items[i] = updatePaystubItemTotal(stub.items[i], gross) // Update Item

        if (stub.items[i].type == PayStubItemType.Tax) {
            taxes = taxes.add(stub.items[i].amount)
        }
        if (stub.items[i].type == PayStubItemType.Other) {
            other = other.add(stub.items[i].amount)
        }
    }

    stub.grossEarnings = gross
    stub.totalTaxes = taxes
    stub.totalExtras = other
    stub.netPay = gross.add(taxes).add(other)

    return stub
}