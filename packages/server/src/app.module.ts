import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesController } from './resources/resources.controller';

@Module({
  imports: [],
  controllers: [AppController, ResourcesController],
  providers: [AppService],
})
export class AppModule {}
