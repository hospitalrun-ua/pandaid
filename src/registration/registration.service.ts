import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { Role, Status } from '../users/users.interface'
import { VolunteerDto } from './dto/volounteer.dto'
import { v4 as uuidv4 } from 'uuid'
import { Status as OrgStatus } from '../organizations/organizations.interface'
import { OrganizationsService } from '../organizations/organizations.service'
import { OrganizationDto } from './dto/organization.dto'

@Injectable()
export class RegistrationService {
  constructor(
    private readonly usersService: UsersService,
    private readonly organizationsService: OrganizationsService
  ) {}

  registerVolunteer(volRegisterRequest: VolunteerDto) {
    this.usersService.addOne({
      role: Role.VOLUNTEER,
      status: Status.REGISTRATION_STARTED,
      name: volRegisterRequest.firstName,
      email: volRegisterRequest.email,
      password: '',
      id: uuidv4()
    })
    return null
  }

  registerOrganization(registerRequest: OrganizationDto) {
    this.organizationsService.addOne({
      id: uuidv4(),
      status: OrgStatus.REGISTRATION_STARTED,
      name: registerRequest.name,
      region: registerRequest.region,
      URL: registerRequest.url,
      description: registerRequest.description,
      contactPersonEmail: registerRequest.contactPersonEmail,
      contactPersonPhoneNumber: registerRequest.contactPersonPhoneNumber,
      contactPersonSecondName: registerRequest.contactPersonSecondName,
      contactPersonFirstName: registerRequest.contactPersonFirstName
    })
    return null
  }
}
