import {Controller, Get, HttpCode, Post} from '@nestjs/common';
import {ApiProperty, ApiResponse} from "@nestjs/swagger";

class ResourcesResponse {
    @ApiProperty()
    list: Resource[]
}

interface Resource {
    name: string
}

@Controller('api/resources')
export class ResourcesController {
    @Get()
    @ApiResponse({ status: 200, type: ResourcesResponse })
    public getHello(): ResourcesResponse {
        return {
            list: [{
                name: "маски"
            }]
        };
    }

    @Post()
    @HttpCode(204)
    public create() {
        return 'This action adds a new resources';
    }
}
