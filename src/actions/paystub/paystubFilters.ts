


type DateFilter = {
    lte: Date,
    gte: Date
}
type NumberFilter = {
    lte: Number,
    gte: Number
}

export type PaystubFilters = Partial<{
    periodStart: Partial<DateFilter>,
    periodEnd: Partial<DateFilter>,
    payDate: Partial<DateFilter>,
    locked: boolean,
    lockedTime: Partial<DateFilter>,
    submittedTime: Partial<DateFilter>,
    employeeId: string,
    grossEarnings: Partial<NumberFilter>,
    totalTaxes: Partial<NumberFilter>,
    totalExtras: Partial<NumberFilter>,
    netPay: Partial<NumberFilter>
}>