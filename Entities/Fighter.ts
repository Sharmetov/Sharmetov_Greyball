// 3. Fighter
import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn
  } from 'typeorm';
  import { Team } from './Team';
  import { Organization } from './Organization';
  import { Fight } from './Fight';
  import { PreFightStats } from './PreFightStats';
  import { FightBonuses } from './FightBonuses';
  import { BettingOdds } from './BettingOdds';
  import { Rankings } from './Rankings';
  import { NewsArticle } from './NewsArticle';
  
  @Entity()
  export class Fighter {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ length: 255 })
    name!: string;
  
    @Column({ length: 255, nullable: true })
    nickname!: string;
  
    @Column({ type: 'date', nullable: true })
    dob!: Date;
  
    @Column({ length: 100, nullable: true })
    nationality!: string;
  
    @Column({ length: 50, nullable: true })
    weight_class!: string;
  
    @ManyToOne(() => Team, team => team.fighters)
    @JoinColumn({ name: 'team_id' })
    team!: Team;
  
    @ManyToOne(() => Organization, organization => organization.fighters)
    @JoinColumn({ name: 'organization_id' })
    organization!: Organization;
  
    @OneToMany(() => Fight, fight => fight.fighter1)
    fights_as_fighter1!: Fight[];
  
    @OneToMany(() => Fight, fight => fight.fighter2)
    fights_as_fighter2!: Fight[];
  
    @OneToMany(() => Fight, fight => fight.winner)
    wins!: Fight[];
  
    @OneToMany(() => PreFightStats, stats => stats.fighter)
    pre_fight_stats!: PreFightStats[];
  
    @OneToMany(() => FightBonuses, bonus => bonus.awarded_to)
    fight_bonuses!: FightBonuses[];
  
    @OneToMany(() => BettingOdds, odds => odds.fighter)
    betting_odds!: BettingOdds[];
  
    @OneToMany(() => Rankings, ranking => ranking.fighter)
    rankings!: Rankings[];
  
    @OneToMany(() => NewsArticle, article => article.fighter)
    news_articles!: NewsArticle[];
  }
  