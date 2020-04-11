import { Body, Controller, Get, HttpCode, Param, Post, Put, Query, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiBearerAuth } from '@nestjs/swagger'
import { ResourcesResponse, ResourceBase, Resource, ResourceStates, ResourceStateRequest } from './resources.dto'
import { Roles } from '../auth/roles.decorator'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Role } from '../users/users.interface'
import { ResourcesService } from './resources.service'

@ApiBearerAuth()
@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  @ApiResponse({ status: 200, type: ResourcesResponse })
  //@UseGuards(JwtAuthGuard, RolesGuard)
  //@Roles(Role.ADMIN, Role.SUPERVISOR, Role.VOLUNTEER)
  public searchResources(@Query('query') query): ResourcesResponse {
    return {
      list: this.resourcesService.getResources()
    }
  }

  @Get(':id')
  @ApiResponse({ status: 200, type: Resource })
  //@UseGuards(JwtAuthGuard, RolesGuard)
  //@Roles(Role.ADMIN, Role.SUPERVISOR, Role.VOLUNTEER)
  public getResource(@Param('id') id: string): Resource {
    return this.resourcesService.getResource(parseInt(id))
  }

  @Post()
  @HttpCode(204)
  public create(@Body() createRequestRequest: ResourceBase) {
    const id = this.resourcesService.getResources().length
    this.resourcesService.addResource({
      id: id,
      quantityCovered: 0,
      name: createRequestRequest.name,
      quantity: createRequestRequest.quantity,
      price: createRequestRequest.price,
      state: createRequestRequest.state,
      beneficiary: createRequestRequest.beneficiary,
      contactPerson: createRequestRequest.contactPerson,
      deadline: createRequestRequest.deadline
    })
  }

  @Put(':id')
  public updateResource(@Param('id') id: string, @Body() resource: ResourceBase): void {
    this.resourcesService.updateResourceById(parseInt(id), resource)
  }

  @Put('/:id/state')
  public updateResourceState(@Param('id') id: string, @Body() stateRequest: ResourceStateRequest): void {
    this.resourcesService.updateResourceState(parseInt(id), stateRequest.state)
  }
}
