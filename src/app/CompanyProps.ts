






export interface CompanyContextProps {
    companyUUID: string,
    companyName: string,
    userName: string
}
export function generateCompanyContext(companyUUID: string, companyName: string, userName: string): CompanyContextProps {
    return {
        companyUUID: companyUUID,
        companyName: companyName,
        userName: userName
    }
}