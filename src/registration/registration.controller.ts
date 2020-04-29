import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger'
import { VolRegisterDto, VolRegisterResponse } from './dto/volregister.dto'
import { RegistrationService } from './registration.service'
import { LocalAuthGuard } from 'src/auth/local-auth.guard'

@ApiTags('register')
@Controller('register')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  // TODO Register Volunteer - application
  @UseGuards(LocalAuthGuard)
  @Post('volregister')
  @ApiBody({ type: VolRegisterDto })
  @ApiResponse({ status: 200, type: VolRegisterResponse })
  volregister(@Body() volRegisterRequest: VolRegisterDto): VolRegisterResponse {
    return this.registrationService.registerVolunteer(volRegisterRequest)
  }

  // TODO Register Org - application
  // TODO Get user profile
}
