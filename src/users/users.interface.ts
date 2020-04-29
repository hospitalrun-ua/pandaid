export enum Role {
  ADMIN = 'ADMIN',
  VOLUNTEER = 'VOLUNTEER',
  SUPERVISOR = 'SUPERVISOR'
}

export enum Status {
  NEW = 'NEW',
  ACTIVE = 'ACTIVE'
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: Role
  status: Status
}
