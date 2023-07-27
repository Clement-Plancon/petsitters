// auth/auth.controller.ts

import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login/user')
  async loginUser(@Body() loginData: { firstName: string; password: string }): Promise<string> {
    const { firstName, password } = loginData;
    return this.authService.login(firstName, password, 'user');
  }

  @Post('login/petsitter')
  async loginPetsitter(@Body() loginData: { firstName: string; password: string }): Promise<string> {
    const { firstName, password } = loginData;
    return this.authService.login(firstName, password, 'petsitter');
  }
}
