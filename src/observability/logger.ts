import * as pino from 'pino'

const baseLogger = pino({
  name: 'pandaid',
  level: 'info',
  prettyPrint: process.env.ENVIRONMENT === 'dev',
  // Generate ISO timestamp
  timestamp: pino.stdTimeFunctions.isoTime
})

export default function createLogger(loggerName: string): pino.Logger {
  return baseLogger.child({ module: loggerName })
}
