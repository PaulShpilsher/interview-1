
export interface Customer {
    id: string
    firstName: string
    lastName: string
    emailAddress: string
}


export interface CustomerSearchRequest {
    firstName: string
    lastName: string
}


export const toCustomer = (json: any): Customer => ({ ...json });
export const toCustomerSearchRequest = (firstName: string, lastName: string): CustomerSearchRequest => ({ firstName, lastName });