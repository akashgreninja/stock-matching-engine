import { Order } from 'src/orders/entities/order.entity';

export class OrderPlacedEvent {
  constructor(public readonly order: Order) {}
}
