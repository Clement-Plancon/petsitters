// petsitter.controller.ts

import { Body, Controller, Get, Post, Put, Param, ParseIntPipe, UseGuards, Delete } from '@nestjs/common';
import { Petsitter } from './petsitter.entity';
import { PetsitterService } from './petsitter.service';

@Controller('petsitter')
export class PetsitterController {
  constructor(private readonly petsitterService: PetsitterService) {}

  @Post('register')
  async registerPetsitter(@Body() petsitterData: Partial<Petsitter>): Promise<Petsitter> {
    return this.petsitterService.registerPetsitter(petsitterData);
  }

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

  @Get()
  async getAllPetsitters(): Promise<Petsitter[]> {
    return this.petsitterService.getAllPetsitters();
  }
  @Delete(':id')
  async deletePetsitter(@Param('id', ParseIntPipe) id: number) {
    return this.petsitterService.deletePetsitter(id);
  }
  @Get(':id')
  async getPetsitterById(@Param('id', ParseIntPipe) id: number): Promise<Petsitter> {
    return this.petsitterService.getPetsitterById(id);
  }
}
