import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { SignInValidator } from './dto';
import { JwtAuthGuard } from './guards/jwt.guard';
import { LocalAuthGuard } from './guards/local.guard';
import { accessToken } from './interfaces/auth.accessToken';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signin')
  signIn(@Body() body: SignInValidator): Promise<accessToken> {
    return this.authService.signIn(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  logIn(@Request() req): Promise<accessToken> {
    return this.authService.logIn(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  protected(@Request() req): Promise<User> {
    return req.user;
  }
}
