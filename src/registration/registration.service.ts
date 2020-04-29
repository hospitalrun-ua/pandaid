import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Role, Status } from '../users/users.interface'
import { VolRegisterDto } from './dto/volregister.dto'
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RegistrationService {
  constructor(private readonly usersService: UsersService) {}
  registerVolunteer(volRegisterRequest: VolRegisterDto) {
    this.usersService.addOne({
      role: Role.VOLUNTEER,
      status: Status.NEW,
      name: volRegisterRequest.firstName,
      email: volRegisterRequest.email,
      password: "",
      id: uuidv4()
    })
    return null
  }
}
