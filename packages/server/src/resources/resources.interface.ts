import {ApiProperty} from "@nestjs/swagger";

export class ResourcesResponse {
    @ApiProperty()
    list: Resource[];
}

export interface Resource {
    id: number;
    name: string;
    quantity: number;
    quantityCovered: number;
    price?: number | null;
    state: ResourceStates;
    beneficiary?: Beneficiary | null;
    contactPerson: Contact;
}

export enum ResourceStates {
    CREATED = 'Created',
}

export interface Beneficiary {
    name: string;
    address: string;
}

export interface Contact {
    name: string;
    email?: string; // TODO add email type
    phone?: string; // TODO add phone type
    website?: string; // TODO add website type
}

export interface CreateRequestRequest {
    beneficiary: Beneficiary | null;
    contactPerson?: Contact;
    items: [{
        name: string;
        quantity: number;
        price?: number;
    }],
    "deadline": number
}