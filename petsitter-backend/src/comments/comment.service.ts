import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from '../users/user.entity';
import { Petsitter } from '../petsitters/petsitter.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Petsitter)
    private petsitterRepository: Repository<Petsitter>,
  ) {}

  async addComment(userId: number, petsitterId: number, commentData: Partial<Comment>): Promise<Comment> {
    // Convertir les IDs en nombres
    const userIdNumber = +userId;
    const petsitterIdNumber = +petsitterId;

    // Récupérer l'utilisateur et le petsitter en fonction de leur ID
    const user = await this.userRepository.findOne({ where: { id: userIdNumber } });
    const petsitter = await this.petsitterRepository.findOne({ where: { id: petsitterIdNumber } });

    if (!user || !petsitter) {
      throw new Error('Utilisateur ou petsitter introuvable');
    }

    // Associer l'utilisateur et le petsitter au commentaire
    const comment = this.commentRepository.create({
      ...commentData,
      user,
      petsitter,
    });

    return this.commentRepository.save(comment);
  }
}
