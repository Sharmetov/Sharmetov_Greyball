import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Event } from './Event';
import { Fighter } from './Fighter';
import { PreFightStats } from './PreFightStats';
import { FightBonuses } from './FightBonuses';
import { BettingOdds } from './BettingOdds';

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Event, event => event.fights, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'event_id' })
  event!: Event;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter1_id' })
  fighter1!: Fighter;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter2_id' })
  fighter2!: Fighter;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'winner_id' })
  winner!: Fighter;

  @Column({ length: 100, nullable: true })
  method!: string;

  @Column({ type: 'int', nullable: true })
  round!: number;

  @Column({ length: 10, nullable: true })
  time!: string;

  @OneToMany(() => PreFightStats, stats => stats.fight)
  pre_fight_stats!: PreFightStats[];

  @OneToMany(() => FightBonuses, bonus => bonus.fight)
  bonuses!: FightBonuses[];

  @OneToMany(() => BettingOdds, odds => odds.fight)
  betting_odds!: BettingOdds[];
}