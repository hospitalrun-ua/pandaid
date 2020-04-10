import { Injectable } from '@nestjs/common'
import { User, Role } from './users.interface'

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin',
        role: Role.ADMIN,
      },
      {
        id: 2,
        name: 'Volunteer',
        email: 'volunteer@example.com',
        password: 'volunteer',
        role: Role.VOLUNTEER,
      },
      {
        id: 3,
        name: 'Supervisor',
        email: 'supervisor@example.com',
        password: 'supervisor',
        role: Role.SUPERVISOR,
      },
    ]
  }

  findOne(email: string) {
    return this.users.find((user) => user.email === email)
  }
}
