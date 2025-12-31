


type DateFilter = {
    lte: Date,
    gte: Date
}

export type PaystubFilters = Partial<{
    periodStart: Partial<DateFilter>,
    periodEnd: Partial<DateFilter>,
    payDate: Partial<DateFilter>,
    locked: boolean,
    lockedTime: Partial<DateFilter>,
    submittedTime: Partial<DateFilter>,
    employeeId: string
}>