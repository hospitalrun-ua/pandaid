import { Controller, Get } from '@nestjs/common';
import { ApiResponse} from '@nestjs/swagger';
import { AppService } from './app.service';

class HelloWorldResponse {
  msg: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, type: HelloWorldResponse })
  public getHello(): HelloWorldResponse {
    return {
      msg: this.appService.getHello()
    };
  }
}
