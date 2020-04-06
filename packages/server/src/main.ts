import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import createLogger from './observability/logger';
import {PinoLoggerService} from "./observability/LoggerService";

const logger = createLogger('nestApp');

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: new PinoLoggerService(logger),
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));

    const options = new DocumentBuilder()
        .setTitle('PandAid')
        .setDescription('The PandAid API description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('swagger', app, document);

    logger.info('Listening...');
    await app.listen(3001);
}

bootstrap()
    .catch((e) => {
    logger.error('Failed to bootstrap Nest.js application', {
        err: e.message,
        stack: e.stack,
    })
});
