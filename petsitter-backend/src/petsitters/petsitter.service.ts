// petsitter.service.ts

import { Injectable, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Petsitter } from './petsitter.entity';

@Injectable()
export class PetsitterService {
  constructor(
    @InjectRepository(Petsitter)
    private petsitterRepository: Repository<Petsitter>,
    private jwtService: JwtService,
  ) {}

  async authenticate(firstName: string, password: string): Promise<string> {
    const petsitter = await this.petsitterRepository.findOne({ where: { firstName } });

    if (!petsitter || petsitter.password !== password) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload = { sub: petsitter.id, firstName: petsitter.firstName };
    return this.jwtService.sign(payload);
  }

  async findByFirstName(firstName: string): Promise<Petsitter> {
    return this.petsitterRepository.findOne({ where: { firstName } });
  }

  async updatePetsitter(id: number, petsitterData: Partial<Petsitter>): Promise<Petsitter> {
    const petsitter = await this.petsitterRepository.findOne({ where: { id } });

    if (!petsitter) {
      throw new Error('Petsitter introuvable');
    }

    // Effectuer la mise à jour des données du petsitter
    Object.assign(petsitter, petsitterData);

    return this.petsitterRepository.save(petsitter);
  }

  // Ajoutez d'autres méthodes de service si nécessaire
}
