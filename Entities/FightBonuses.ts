import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Fight } from './Fight';
import { Fighter } from './Fighter';

@Entity()
export class FightBonuses {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Fight, fight => fight.bonuses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fight_id' })
  fight!: Fight;

  @Column({ length: 100 })
  bonus_type!: string;

  @Column('decimal', { precision: 10, scale: 2 })
  amount!: number;

  @ManyToOne(() => Fighter, fighter => fighter.fight_bonuses)
  @JoinColumn({ name: 'awarded_to' })
  awarded_to!: Fighter;
}