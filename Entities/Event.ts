import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Organization } from './Organization';
import { Fight } from './Fight';
import { NewsArticle } from './NewsArticle';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ type: 'date' })
  event_date!: Date;

  @Column({ length: 255, nullable: true })
  location!: string;

  @Column({ length: 255, nullable: true })
  venue!: string;

  @ManyToOne(() => Organization, organization => organization.events)
  @JoinColumn({ name: 'organization_id' })
  organization!: Organization;

  @OneToMany(() => Fight, fight => fight.event)
  fights!: Fight[];

  @OneToMany(() => NewsArticle, article => article.event)
  news_articles!: NewsArticle[];
}