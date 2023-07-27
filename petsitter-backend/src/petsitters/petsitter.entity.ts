// petsitter.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from '../comments/comment.entity';

@Entity()
export class Petsitter {
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

  @Column({ nullable: true })
  dog: number | null;

  @Column({ nullable: true })
  cat: number | null;

  @Column({ nullable: true })
  rodent: number | null;

  @Column({ nullable: true })
  fish: number | null;

  @Column({ nullable: true })
  ferret: number | null;

  @Column({ nullable: true })
  farmAnimal: number | null;

  @Column({ nullable: true })
  reptile: number | null;

  @Column({ nullable: true })
  horse: number | null;
  
  @Column({ nullable: true })
  bird: number | null;

  @Column({ nullable: true })
  hostFamily: boolean | null;

  @Column({ nullable: true })
  atYourHome: boolean | null;

  @Column({ nullable: true })
  dailyVisit: boolean | null;

  @Column({ nullable: true })
  promenade: boolean | null;

  @OneToMany(() => Comment, comment => comment.petsitter)
  comments: Comment[];

}
