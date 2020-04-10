export enum Role {
  ADMIN = 'ADMIN',
  VOLUNTEER = 'VOLUNTEER',
  SUPERVISOR = 'SUPERVISOR'
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  role: Role
}
