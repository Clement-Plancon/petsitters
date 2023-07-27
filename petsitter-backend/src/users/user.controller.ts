// user.controller.ts

import { Body, Controller, Post, Param, Put } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.registerUser(userData);
  }

  @Put(':id')
  async updateUser(@Param('id') userId: number, @Body() userData: Partial<User>): Promise<User> {
    return this.userService.updateUser(userId, userData);
  }
}
