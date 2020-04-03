import {Controller, HttpCode, Post} from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
    @Post()
    @HttpCode(204)
    public create() {
        return 'This action adds a new resources';
    }
}
