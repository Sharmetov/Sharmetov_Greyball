import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Fight } from './Fight';
import { Fighter } from './Fighter';

@Entity()
export class BettingOdds {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Fight, fight => fight.betting_odds, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fight_id' })
  fight!: Fight;

  @ManyToOne(() => Fighter, fighter => fighter.betting_odds)
  @JoinColumn({ name: 'fighter_id' })
  fighter!: Fighter;

  @Column('decimal', { precision: 6, scale: 3 })
  decimal_odds!: number;

  @Column('int')
  moneyline!: number;

  @Column('float')
  implied_probability!: number;
}
