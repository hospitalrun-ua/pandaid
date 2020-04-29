import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { EmailModule } from './email/email.module'
import { ResourcesModule } from './resources/resources.module'
import { RegistrationModule } from './registration/registration.module'
import { OfferModule } from './offer/offer.module'

@Module({
  imports: [AuthModule, UsersModule, EmailModule, ResourcesModule, RegistrationModule, OfferModule]
})
export class AppModule {}
