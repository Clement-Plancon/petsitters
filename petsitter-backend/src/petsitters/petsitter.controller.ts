// petsitter.controller.ts

import { Body, Controller, Post, Put, Param, ParseIntPipe, UseGuards } from '@nestjs/common';
import { Petsitter } from './petsitter.entity';
import { PetsitterService } from './petsitter.service';

@Controller('petsitter') // Mettez simplement 'petsitter' au lieu de 'auth/petsitter'
export class PetsitterController {
  constructor(private readonly petsitterService: PetsitterService) {}

  @Post('login')
  async login(@Body() loginData: { username: string; password: string }): Promise<{ token: string }> {
    const { username, password } = loginData;
    const token = await this.petsitterService.authenticate(username, password);
    return { token };
  }

  @Put(':id')
  async updatePetsitter(
    @Param('id', ParseIntPipe) id: number,
    @Body() petsitterData: Partial<Petsitter>,
  ): Promise<Petsitter> {
    return this.petsitterService.updatePetsitter(id, petsitterData);
  }
}
