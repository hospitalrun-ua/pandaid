import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UserSession } from '../users/users.session.decorator';
import { User } from '@shared/users';
import { LoginRequest, LoginResponse } from '@shared/auth';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({ type: LoginRequest })
    @ApiResponse({ status: 200, type: LoginResponse })
    login(@UserSession() user: User): LoginResponse {
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    logut() {
        /* TODO: logout action ? */
    }
}
