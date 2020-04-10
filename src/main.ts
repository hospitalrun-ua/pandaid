import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import createLogger from './observability/logger'
import { PinoLoggerService } from './observability/LoggerService'

const logger = createLogger('nestApp')

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new PinoLoggerService(logger)
  })
  app.setGlobalPrefix('api')
  app.enableCors() // TODO remove for production
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))

  const options = new DocumentBuilder()
    .setTitle('PandAid')
    .setDescription('The PandAid API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)

  const port = process.env.PORT || 3001
  logger.info(`Listening on port ${port}`)
  await app.listen(port)
}

bootstrap().catch(e => {
  logger.error('Failed to bootstrap Nest.js application', {
    err: e.message,
    stack: e.stack
  })
})
