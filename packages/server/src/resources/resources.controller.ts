import { Body, Controller, Get, HttpCode, Post, Query, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger'
import { ResourceStates, ResourcesResponse, CreateRequestRequest } from '@shared/resources.dto'
import { Role } from '@shared/users.dto'
import { Roles } from '../auth/roles.decorator'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'

@ApiBearerAuth()
@Controller('resources')
export class ResourcesController {
  @Get()
  @ApiResponse({ status: 200, type: ResourcesResponse })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN, Role.SUPERVISOR, Role.VOLUNTEER)
  public searchResources(@Query('query') query): ResourcesResponse {
    return {
      list: [
        {
          id: 1,
          name: 'Апарат ШВЛ високого класу',
          quantity: 5,
          quantityCovered: 0,
          price: 5500,
          state: ResourceStates.CREATED,
          beneficiary: {
            name: 'КНП «ЦРЛ Києво-Святошинської районної ради»',
            address: 'Боярка, вул. Соборності, 51 - адреса лікарні'
          },
          contactPerson: {
            name: 'Ivan Ivanox',
            email: 'kanboycrl@gmail.com',
            phone: '38(067)793-53-61',
            website: 'ks-crl.org.ua'
          }
        },
        {
          id: 2,
          name: 'Респіратор класу захисту FFP3',
          quantity: 13455,
          quantityCovered: 400,
          price: 134,
          state: ResourceStates.CREATED,
          beneficiary: {
            name: 'КНП «ЦРЛ Києво-Святошинської районної ради»',
            address: 'Боярка, вул. Соборності, 51 - адреса лікарні'
          },
          contactPerson: {
            name: 'Ivan Ivanox',
            email: 'kanboycrl@gmail.com',
            phone: '38(067)793-53-61',
            website: 'ks-crl.org.ua'
          }
        }
      ]
    }
  }

  @Post()
  @HttpCode(204)
  public create(@Body() createRequestRequest: CreateRequestRequest) {
    return { id: 3 }
  }
}
