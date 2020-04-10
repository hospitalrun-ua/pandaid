import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { EmailModule } from './email/email.module'
import { ResourcesModule } from './resources/resources.module'

@Module({
  imports: [AuthModule, UsersModule, EmailModule, ResourcesModule]
})
export class AppModule {}
