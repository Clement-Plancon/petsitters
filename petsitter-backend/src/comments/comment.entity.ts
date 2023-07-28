// comments/comment.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Petsitter } from '../petsitters/petsitter.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  content: string | null;

  @Column()
  note: number;

  @ManyToOne(() => User, user => user.comments, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Petsitter, petsitter => petsitter.comments, { onDelete: 'CASCADE' })
  petsitter: Petsitter;
}
