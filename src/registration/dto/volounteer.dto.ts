import { IsNotEmpty, IsEmail, IsLowercase, IsPhoneNumber } from 'class-validator'

export class VolunteerDto {
  @IsLowercase()
  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly firstName: string

  @IsNotEmpty()
  readonly secondName: string

  // TODO add validation params
  // @IsPhoneNumber()
  @IsNotEmpty()
  readonly phoneNumber: string

  @IsNotEmpty()
  readonly region: string

  @IsNotEmpty()
  readonly socialNetworkLink: string

  @IsNotEmpty()
  readonly organizationName: string
}

export class VolunteerResponse {}
