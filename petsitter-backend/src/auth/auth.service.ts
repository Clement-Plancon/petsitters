// auth/auth.service.ts

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { PetsitterService } from '../petsitters/petsitter.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly petsitterService: PetsitterService,
    private readonly jwtService: JwtService,
  ) {}

  async login(firstName: string, password: string, userType: 'user' | 'petsitter'): Promise<string> {
    // Vérifier les informations d'identification en fonction du type d'utilisateur
    let user;
    if (userType === 'user') {
      user = await this.userService.findByFirstName(firstName);
    } else if (userType === 'petsitter') {
      user = await this.petsitterService.findByFirstName(firstName);
    }

    if (!user || user.password !== password) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    // Générer et retourner le token d'accès si les informations d'identification sont valides
    const payload = { sub: user.id, firstName: user.firstName };
    return this.jwtService.sign(payload);
  }

  async verifyToken(token: string): Promise<{ firstName: string }> {
    try {
      // Vérifier la validité du token et récupérer les informations associées
      const payload = this.jwtService.verify(token);
      return { firstName: payload.firstName };
    } catch (error) {
      throw new UnauthorizedException('Token invalide');
    }
  }
}
