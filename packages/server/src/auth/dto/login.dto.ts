import { IsNotEmpty, IsEmail, IsLowercase } from 'class-validator';

export class LoginDto {
  @IsLowercase()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}

export class LoginResponse {
  readonly token: string;
}
