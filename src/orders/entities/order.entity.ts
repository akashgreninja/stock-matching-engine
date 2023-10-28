import { Stock } from 'src/stocks/entities/stock.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum OrderType {
  BUY = 'buy',
  SELL = 'sell',
}

export enum orderStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Stock)
  @JoinColumn({ name: 'stockId' })
  stock: Stock;

  @Column({ type: 'enum', enum: OrderType })
  type: OrderType;

  @Column()
  quantity: number;

  @Column({ type: 'double precision' })
  price: number;

  @Column({ type: 'enum', enum: orderStatus })
  status: orderStatus;

  @Column()
  placedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
