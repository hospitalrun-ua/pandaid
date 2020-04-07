import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@shared/users.dto'
import { LoginRequest, LoginResponse } from '@shared/auth.dto'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

  validateUser({ email, password }: LoginRequest) {
    const user = this.usersService.findOne(email)
    if (user) {
      const passwordMatch = user.password === password
      if (passwordMatch) {
        return { id: user.id, email, role: user.role, name: user.name }
      }
    }
    return null
  }

  login(user: User): LoginResponse {
    return { token: this.jwtService.sign(user) }
  }
}
