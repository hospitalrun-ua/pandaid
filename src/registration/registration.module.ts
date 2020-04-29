import { Module } from '@nestjs/common'
import { RegistrationController } from './registration.controller'

@Module({
  controllers: [RegistrationController]
})
export class RegistrationModule {}
