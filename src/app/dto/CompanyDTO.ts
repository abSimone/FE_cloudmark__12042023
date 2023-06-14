export interface CompanyDTO {
    id: number,
    companyName: string,
    vatNumber: string,
    address: string,
    iban: string,
    phoneNumber: number,
    email: string,
    pec: string,
    fax: number | null,
}