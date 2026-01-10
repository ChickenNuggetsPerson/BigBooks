






export interface CompanyContextProps {
    companyUUID: string,
    companyName: string,
    userName: string,
    sessionExpireTime: Date
}
export function generateCompanyContext(companyUUID: string, companyName: string, userName: string, sessionExpireTime: Date): CompanyContextProps {
    return {
        companyUUID: companyUUID,
        companyName: companyName,
        userName: userName,
        sessionExpireTime: sessionExpireTime
    }
}