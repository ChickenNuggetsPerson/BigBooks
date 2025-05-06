import { PercentOf } from "@/functions/PercentStr"
import { DispEmployee, DispOrganization, DispPaystub, getEmptyDispPaystub } from "../models/DisplayModels"
import { getEmptyPaystubHourly } from "../models/SchemaJSON"






export enum TaxType {
    Federal = 1,
    State = 2,
    SocialSecurity = 3,
    Medicare = 4
}


export function TaxTypeDispName(t: TaxType) {
    switch (t) {
        case TaxType.Federal:
            return "Federal Income Tax"

        case TaxType.State:
            return "State Income Tax"

        case TaxType.SocialSecurity:
            return "Social Security Tax"

        case TaxType.Medicare:
            return "Medicare Tax"
    }
}


export function populatePaystub(e: DispEmployee, o: DispOrganization, periodUUID: string): DispPaystub {
    const newStub = getEmptyDispPaystub()

    newStub.employeeUUID = e.uuid
    newStub.payperiodUUID = periodUUID
    
    if (e.isSalary) {
        newStub.salary = Math.floor((e.salary / o.periodsPerYear) * 100) / 100
    } else {
        newStub.hourly = e.hourlyRates.map((rate) => {
            const hourly = getEmptyPaystubHourly()
            hourly.name = rate.name
            hourly.rate = rate.rate
            return hourly
        })
    }

    // TODO update tax information 
    newStub.federalRate = 1.3
    newStub.stateRate = 4.3
    newStub.mediRate = 2 
    newStub.socialRate = 3

    return newStub
}


export function updateTotals(p: DispPaystub) : DispPaystub {

    const newStub = {...p}

    for (let i = 0; i < newStub.hourly.length; i++) {
        newStub.hourly[i].amount = newStub.hourly[i].rate * newStub.hourly[i].hours
    }

    const gross = p.bonus + p.commission + p.salary + p.hourly.reduce((prev, current) => { return prev + current.amount}, 0)

    newStub.federalAmt = PercentOf(gross, newStub.federalRate)
    newStub.stateAmt = PercentOf(gross, newStub.stateRate)
    newStub.mediAmt = PercentOf(gross, newStub.mediRate)
    newStub.socialAmt = PercentOf(gross, newStub.socialRate)

    for (let i = 0; i < newStub.otherItems.length; i++) { // Update Reimbursement Totals
        if (newStub.otherItems[i].percent == 0) {
            newStub.otherItems[i].amount = newStub.otherItems[i].flatAmt
        } else {
            newStub.otherItems[i].amount = PercentOf(gross, newStub.otherItems[i].percent)
        }
    }

    return newStub
}