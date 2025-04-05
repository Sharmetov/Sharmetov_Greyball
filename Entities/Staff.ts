import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Organization } from './Organization';

@Entity()
export class Staff {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 255 })
  name!: string;

  @Column({ length: 100 })
  role!: string;

  @ManyToOne(() => Organization, organization => organization.staff)
  @JoinColumn({ name: 'organization_id' })
  organization!: Organization;
}
