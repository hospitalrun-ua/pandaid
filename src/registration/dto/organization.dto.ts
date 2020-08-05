import { IsNotEmpty, IsEmail, IsLowercase, Matches } from 'class-validator';

export class OrganizationDto {
  @IsLowercase()
  readonly name: string

  @IsNotEmpty()
  // eslint-disable-next-line no-useless-escape
  @Matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, {
    message: 'Wrong url.'
  })
  readonly url: string

  @IsNotEmpty()
  readonly description: string

  @IsNotEmpty()
  readonly region: string

  @IsNotEmpty()
  readonly contactPersonFirstName: string

  @IsNotEmpty()
  readonly contactPersonSecondName: string

  @IsNotEmpty()
  @IsEmail()
  readonly contactPersonEmail: string

  @IsNotEmpty()
  @Matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/, {
    message: 'Wrong phone number.'
  })
  readonly contactPersonPhoneNumber: string
}

export class OrganizationResponse {}
