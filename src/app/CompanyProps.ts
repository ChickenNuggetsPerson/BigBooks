






export interface CompanyContextProps {
    companyUUID: string,
    companyName: string
}
export function generateCompanyContext(companyUUID: string, companyName: string): CompanyContextProps {
    return {
        companyUUID: companyUUID,
        companyName: companyName
    }
}