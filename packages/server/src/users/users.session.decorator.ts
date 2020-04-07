import { createParamDecorator } from '@nestjs/common'

export const UserSession = createParamDecorator((data: string | undefined, req) => {
  const request = req.switchToHttp().getRequest()
  return data ? request.user && request.user[data] : request.user
})
