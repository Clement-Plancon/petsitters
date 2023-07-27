// user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async registerUser(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData);
    return this.userRepository.save(newUser);
  }

  async findByFirstName(firstName: string): Promise<User> {
    return this.userRepository.findOne({ where: { firstName } });
  }

  async updateUser(userId: number, userData: Partial<User>): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!user) {
      throw new NotFoundException('Utilisateur introuvable');
    }

    // Mettez à jour les informations de l'utilisateur
    Object.assign(user, userData);
    return this.userRepository.save(user);
  }
}
