import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import createLogger from "./observability/logger";

const logger = createLogger('nestApp')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
      .setTitle('PandAid')
      .setDescription('The PandAid API description')
      .setVersion('1.0')
      .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  logger.info('Listening...')
  await app.listen(3001);
}
bootstrap();
