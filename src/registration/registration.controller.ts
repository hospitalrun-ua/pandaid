import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger'
import { VolRegisterDto, VolRegisterResponse } from './dto/volregister.dto'
import { RegistrationService } from './registration.service'
import { OrgRegisterDto, OrgRegisterResponse } from './dto/orgregister.dto'

@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('volregister')
  @ApiBody({ type: VolRegisterDto })
  @ApiResponse({ status: 200, type: VolRegisterResponse })
  volregister(@Body() volRegisterRequest: VolRegisterDto): VolRegisterResponse {
    return this.registrationService.registerVolunteer(volRegisterRequest)
  }

  @Post('orgregister')
  @ApiBody({ type: OrgRegisterDto })
  @ApiResponse({ status: 200, type: OrgRegisterResponse })
  orgregister(@Body() registerRequest: OrgRegisterDto): OrgRegisterResponse {
    return this.registrationService.registerOrganization(registerRequest)
  }

  // TODO Get user profile
}
