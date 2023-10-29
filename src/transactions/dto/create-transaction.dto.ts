import { Order } from 'src/orders/entities/order.entity';

export class CreateTransactionDto {
  buyOrder: Order;

  sellOrder: Order;

  quantity: number;

  price: number;

  timestamp: Date;
}
