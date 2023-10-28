import { Order } from 'src/orders/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'buyOrderId' })
  buyOrder: Order;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'sellOrderId' })
  sellOrder: Order;

  @Column()
  quantity: number;

  @Column({ type: 'double precision' })
  price: number;

  @Column()
  timestamp: Date;
}
