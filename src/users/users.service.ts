import { Injectable } from '@nestjs/common'
import { User, Role, Status } from './users.interface'

@Injectable()
export class UsersService {
  private readonly users: User[]

  constructor() {
    this.users = [
      {
        id: 1,
        name: 'Admin',
        email: 'admin@example.com',
        password: '1',
        role: Role.ADMIN,
        status: Status.ACTIVE
      },
      {
        id: 2,
        name: 'Volunteer',
        email: 'volunteer@example.com',
        password: '1',
        role: Role.VOLUNTEER,
        status: Status.ACTIVE
      },
      {
        id: 3,
        name: 'Supervisor',
        email: 'supervisor@example.com',
        password: '1',
        role: Role.SUPERVISOR,
        status: Status.ACTIVE
      }
    ]
  }

  findOne(email: string) {
    return this.users.find(user => user.email === email)
  }

  addOne(user: User){
    this.users.push(user)
  }
}
