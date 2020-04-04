import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesController } from './resources/resources.controller';
import {ResourcesService} from "./resources/resources.service";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EmailModule } from './email/email.module';

@Module({
  imports: [AuthModule, UsersModule, EmailModule],
  controllers: [AppController, ResourcesController],
  providers: [AppService, ResourcesService],
})
export class AppModule {}
