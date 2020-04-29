import { IsNotEmpty, IsEmail, IsLowercase } from 'class-validator'

export class VolRegisterDto {
  @IsLowercase()
  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly firstName: string

  @IsNotEmpty()
  readonly secondName: string

  @IsNotEmpty()
  readonly phoneNumber: string

  @IsNotEmpty()
  readonly region: string

  @IsNotEmpty()
  readonly socialNetworkLink: string

  @IsNotEmpty()
  readonly organizationName: string

  @IsNotEmpty()
  readonly password: string
}

export class VolRegisterResponse {
}
