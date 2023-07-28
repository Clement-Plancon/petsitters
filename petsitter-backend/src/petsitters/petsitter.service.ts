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
  async registerPetsitter(petsitterData: Partial<Petsitter>): Promise<Petsitter> {
    // Assurez-vous que le nom d'utilisateur n'est pas déjà utilisé par un autre petsitter
    const existingPetsitter = await this.petsitterRepository.findOne({
      where: { firstName: petsitterData.firstName },
    });

    if (existingPetsitter) {
      throw new Error('Ce nom d\'utilisateur est déjà utilisé.');
    }

    // Créez un nouvel objet Petsitter avec les données fournies
    const newPetsitter = this.petsitterRepository.create(petsitterData);

    // Enregistrez le nouvel objet Petsitter dans la base de données
    return this.petsitterRepository.save(newPetsitter);
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

  async getAllPetsitters(): Promise<Petsitter[]> {
    return this.petsitterRepository.find();
  }
  async deletePetsitter(petsitterId: number): Promise<void> {
    const petsitter = await this.petsitterRepository.findOne({ where: { id: petsitterId } });

    if (!petsitter) {
      throw new NotFoundException('Petsitter introuvable');
    }

    await this.petsitterRepository.remove(petsitter);
  }
  async getPetsitterById(id: number): Promise<Petsitter> {
    try {
      const petsitter = await this.petsitterRepository.findOne({ where: { id } });
  
      if (!petsitter) {
        throw new NotFoundException('Petsitter introuvable');
      }
  
      return petsitter;
    } catch (error) {
      throw new NotFoundException('Erreur lors de la recherche du petsitter');
    }
  }
  
  
  
}
