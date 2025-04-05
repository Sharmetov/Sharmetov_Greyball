import {
    Entity, PrimaryGeneratedColumn, Column, OneToMany
  } from 'typeorm';
  import { Staff } from './Staff';
  import { Fighter } from './Fighter';
  import { Event } from './Event';
  import { Rankings } from './Rankings';
  import { NewsArticle } from './NewsArticle';
  
  @Entity()
  export class Organization {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column({ length: 255 })
    name!: string;
  
    @Column({ length: 100, nullable: true })
    country!: string;
  
    @Column({ type: 'date', nullable: true })
    found_year!: Date;
  
    @Column({ length: 255, nullable: true })
    website!: string;
  
    @OneToMany(() => Staff, staff => staff.organization)
    staff!: Staff[];
  
    @OneToMany(() => Fighter, fighter => fighter.organization)
    fighters!: Fighter[];
  
    @OneToMany(() => Event, event => event.organization)
    events!: Event[];
  
    @OneToMany(() => Rankings, ranking => ranking.organization)
    rankings!: Rankings[];
  
    @OneToMany(() => NewsArticle, article => article.organization)
    news_articles!: NewsArticle[] ;
}