export interface Address {
    id: string
    line1: string
    line2: string
    city: string
    stateOrProvince: string
    country: string
    postalCode: string
}

export const toAddress = (json: any): Address => ({ ...json });
