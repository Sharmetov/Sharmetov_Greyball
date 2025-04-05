import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Organization } from './Organization';
import { Fighter } from './Fighter';

@Entity()
export class Rankings {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Organization, organization => organization.rankings)
  @JoinColumn({ name: 'organization_id' })
  organization!: Organization;

  @ManyToOne(() => Fighter, fighter => fighter.rankings)
  @JoinColumn({ name: 'fighter_id' })
  fighter!: Fighter;

  @Column({ length: 50 })
  weight_class!: string;

  @Column('int')
  rank!: number;

  @Column('int')
  points!: number;

  @Column({ default: false })
  is_champion!: boolean;

  @Column({ length: 100 })
  ranking_type!: string;
}
