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


export function updateTaxes(e: DispEmployee, o: DispOrganization): DispPaystub {
    const newStub = getEmptyDispPaystub()

    
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
    newStub.federalRate = 1.3 / 100
    newStub.stateRate = 4.3 / 100
    newStub.mediRate = 2 / 100
    newStub.socialRate = 3 / 100

    return newStub
}