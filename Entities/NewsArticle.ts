import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Event } from './Event';
import { Fighter } from './Fighter';
import { Organization } from './Organization';

@Entity()
export class NewsArticle {
  @PrimaryGeneratedColumn()
  id!: number;  
  @Column({ length: 255 })
  title!: string;

  @Column('text', { nullable: true })
  content!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  published_at!: Date;

  @Column({ length: 255, nullable: true })
  author!: string;

  @ManyToOne(() => Event, event => event.news_articles)
  @JoinColumn({ name: 'event_id' })
  event!: Event;

  @ManyToOne(() => Fighter, fighter => fighter.news_articles)
  @JoinColumn({ name: 'fighter_id' })
  fighter!: Fighter;

  @ManyToOne(() => Organization, organization => organization.news_articles)
  @JoinColumn({ name: 'organization_id' })
  organization!: Organization;
}
