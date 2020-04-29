import { Body, Controller, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../auth/roles.decorator'
import { Role } from '../users/users.interface'
import { ApiResponse } from '@nestjs/swagger'
import { OfferService } from './offer.service'
import { ChangeStateRequest, Offer, OfferBase, OffersResponse, OfferStates } from './offer.dto'

@Controller('offer')
export class OfferController {
  // TODO working just for 1 org
  constructor(private readonly offerService: OfferService) {}

  @Get()
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  @ApiResponse({ status: 200, type: OffersResponse })
  public getOffers(): OffersResponse {
    return {
      list: this.offerService.getOffers()
    }
  }

  @Post()
  @HttpCode(204)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERVISOR, Role.VOLUNTEER)
  public create(@Body() createRequestRequest: OfferBase) {
    const id = this.offerService.getOffers().length
    this.offerService.addOffer({
      id: id,
      state: OfferStates.OPEN
      //TODO add fields
    })
  }

  @Put(':id/state')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERVISOR)
  @ApiResponse({ status: 200, type: ChangeStateRequest })
  public setState(@Param('id') id: string, @Body() changeStatusRequest: ChangeStateRequest): Offer {
    return this.offerService.changeState(parseInt(id), changeStatusRequest.state)
  }
}
