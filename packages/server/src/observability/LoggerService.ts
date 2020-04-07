import { LoggerService } from '@nestjs/common'
import * as pino from 'pino'

export class PinoLoggerService implements LoggerService {
  private logger: pino.Logger

  constructor(logger: pino.Logger) {
    this.logger = logger
  }

  log(message: string) {
    this.logger.info(message)
  }

  error(message: string, trace: string) {
    this.logger.error(message, {
      trace,
    })
  }

  warn(message: string) {
    this.logger.warn(message)
  }

  debug(message: string) {
    this.logger.debug(message)
  }

  verbose(message: string) {
    this.logger.debug(message)
  }
}
