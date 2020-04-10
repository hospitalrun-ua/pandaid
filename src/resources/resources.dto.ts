export class ResourcesResponse {
  list: Resource[]
}

export class Resource {
  id: number
  name: string
  quantity: number
  quantityCovered: number
  price?: number | null
  state: ResourceStates | string
  beneficiary?: Beneficiary | null
  contactPerson: Contact
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

export class CreateRequestRequest {
  beneficiary: Beneficiary | null
  contactPerson?: Contact
  items: Item[]
  deadline: number
}

class Item {
  name: string
  quantity: number
  price?: number
}
