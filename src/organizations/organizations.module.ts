import { Module } from '@nestjs/common'
import { OrganizationsService } from './organizations.service'

@Module({
  providers: [OrganizationsService],
  exports: [OrganizationsService]
})
export class OrganizationsModule {}
