import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger'
import { VolunteerDto, VolunteerResponse } from './dto/volounteer.dto'
import { RegistrationService } from './registration.service'
import { OrganizationDto, OrganizationResponse } from './dto/organization.dto'

@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('volunteer')
  @ApiBody({ type: VolunteerDto })
  @ApiResponse({ status: 200, type: VolunteerResponse })
  volunteer(@Body() volRegisterRequest: VolunteerDto): VolunteerResponse {
    return this.registrationService.registerVolunteer(volRegisterRequest)
  }

  @Post('organization')
  @ApiBody({ type: OrganizationDto })
  @ApiResponse({ status: 200, type: OrganizationResponse })
  organization(@Body() registerRequest: OrganizationDto): OrganizationResponse {
    return this.registrationService.registerOrganization(registerRequest)
  }

  // TODO Get user profile
}
