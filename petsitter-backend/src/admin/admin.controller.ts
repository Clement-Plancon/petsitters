// admin.controller.ts

import { Controller, Get } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { User } from '../users/user.entity';

@Controller('admin/users')
export class AdminController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
