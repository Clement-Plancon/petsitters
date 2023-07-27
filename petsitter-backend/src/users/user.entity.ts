// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from '../comments/comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  postalCode: string;

  @Column()
  drivingLicense: boolean;

  @Column()
  dateOfBirth: string;

  @Column()
  mail: string;

  @Column()
  phoneNumber: string;

  @Column()
  password: string;

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

}
