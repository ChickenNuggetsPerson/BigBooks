


export const PayrollSteps = [
    {
        label: "Select Draft",
        path: "draft"
    },
    {
        label: "Select Employees",
        path: "select"
    },
    {
        label: "Enter Payroll",
        path: "paystubs"
    },
    {
        label: "Review",
        path: "review"
    }
] as const;

export type PayrollPathName = typeof PayrollSteps[number]["path"]