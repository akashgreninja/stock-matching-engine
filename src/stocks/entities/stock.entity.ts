import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  ticker: string;

  @Column({ length: 200 })
  name: string;

  @Column({ type: 'double precision' })
  currentPrice: number;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;
}
