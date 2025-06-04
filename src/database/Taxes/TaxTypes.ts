




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
