
export interface Address {
    id: string;
    name: string;
    pincode: string;
    locality: string;
    address: string;
    city: string;
    state: string;
    type: AddressType
}

export enum AddressType {
    HOME = 'home',
    OFFICE = 'office'
}