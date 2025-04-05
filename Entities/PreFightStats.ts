import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Fight } from './Fight';
import { Fighter } from './Fighter';

@Entity()
export class PreFightStats {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Fight, fight => fight.pre_fight_stats, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fight_id' })
  fight!: Fight;

  @ManyToOne(() => Fighter, fighter => fighter.pre_fight_stats)
  @JoinColumn({ name: 'fighter_id' })
  fighter!: Fighter;

  @Column('int')
  height_cm!: number;

  @Column('int')
  weight_kg!: number;

  @Column('int')
  reach_cm!: number;

  @Column({ length: 50 })
  stance!: string;

  @Column('int')
  record_wins!: number;

  @Column('int')
  record_losses!: number;

  @Column('int')
  record_draws!: number;
}