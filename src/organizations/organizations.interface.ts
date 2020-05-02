export enum Status {
  REGISTRATION_STARTED = 'REGISTRATION_STARTED',
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
