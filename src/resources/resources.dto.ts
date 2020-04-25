export class ResourcesResponse {
  list: Resource[]
}

export class ChangeStateRequest {
  state: ResourceStates
}

export class ResourceBase {
  name: string
  quantity: number
  price?: number | null
  beneficiary?: Beneficiary | null
  contactPerson?: Contact
  deadline?: number
}
export class Resource extends ResourceBase {
  id: number
  quantityCovered: number
  state: ResourceStates | string
}

export enum ResourceStates {
  OPEN = 'Open',
  ARCHIVED = 'Archived',
  EXPIRED = 'Expired',
  PENDING = 'Pending',
  CLOSED = 'Closed'
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
