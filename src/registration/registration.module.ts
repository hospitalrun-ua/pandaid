import { Module } from '@nestjs/common'
import { RegistrationController } from './registration.controller'
import { RegistrationService } from './registration.service'
import { UsersModule } from 'src/users/users.module'

@Module({
  imports: [
    UsersModule,   
  ],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}
