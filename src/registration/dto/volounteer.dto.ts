import { IsNotEmpty, IsEmail, IsLowercase, Matches } from 'class-validator';

export class VolunteerDto {
  @IsLowercase()
  @IsEmail()
  readonly email: string

  @IsNotEmpty()
  readonly firstName: string

  @IsNotEmpty()
  readonly secondName: string

  @IsNotEmpty()
  @Matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/, {
    message: 'Wrong phone number.'
  })
  readonly phoneNumber: string

  @IsNotEmpty()
  readonly region: string

  @IsNotEmpty()
  readonly socialNetworkLink: string

  @IsNotEmpty()
  readonly organizationName: string
}

export class VolunteerResponse {}
