export class ResourcesResponse {
  list: Resource[]
}

export class ResourceBase {
  name: string
  quantity: number
  price?: number | null
  state: ResourceStates | string
  beneficiary?: Beneficiary | null
  contactPerson?: Contact
  deadline?: number
}
export class Resource extends ResourceBase {
  id: number
  quantityCovered: number
}

export enum ResourceStates {
  CREATED = 'Created'
}

export class Beneficiary {
  name: string
  address: string
}

export class Contact {
  name: string
  email?: string // TODO add email type
  phone?: string // TODO add phone type
  website?: string // TODO add website type
}
