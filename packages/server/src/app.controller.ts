import { Controller, Get } from '@nestjs/common';
import {ApiProperty, ApiResponse} from '@nestjs/swagger';
import { AppService } from './app.service';

class HelloWorldResponse {
  @ApiProperty()
  msg: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, type: HelloWorldResponse })
  getHello(): HelloWorldResponse {
    return {
      msg: this.appService.getHello()
    };
  }
}
