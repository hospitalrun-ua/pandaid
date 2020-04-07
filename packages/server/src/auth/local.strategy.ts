import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginRequest } from '@shared/auth.dto';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({ usernameField: 'email' });
    }

    validate(loginData: LoginRequest) {
        const user = this.authService.validateUser(loginData);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
