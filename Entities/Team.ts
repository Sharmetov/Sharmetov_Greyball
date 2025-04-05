// 2. Team
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fighter } from './Fighter';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 100, nullable: true })
  city!: string;

  @Column({ length: 100, nullable: true })
  country!: string;

  @OneToMany(() => Fighter, fighter => fighter.team)
  fighters!: Fighter[];
}
