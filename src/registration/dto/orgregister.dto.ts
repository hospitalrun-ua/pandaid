import { IsNotEmpty, IsEmail, IsLowercase, IsPhoneNumber } from 'class-validator'

export class OrgRegisterDto {
  @IsLowercase()
  readonly name: string

  @IsNotEmpty()
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
  readonly contactPersonPhoneNumber: string
}

export class OrgRegisterResponse {}
