export enum Status {
  NEW = 'NEW',
  ACTIVE = 'ACTIVE'
}

export interface Organization {
  id: number
  status: Status
  name: string
  URL: string
  description: string
  region: string
  contactPersonFirstName: string
  contactPersonSecondName: string
  contactPersonEmail: string
  contactPersonPhoneNumber: string
}
