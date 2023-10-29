// services/order-emitter.service.ts
import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Order } from 'src/orders/entities/order.entity';
import { OrderPlacedEvent } from './order-placed.event';

@Injectable()
export class OrderEmitterService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  emitOrderPlacedEvent(order: Order) {
    this.eventEmitter.emit('order.placed', new OrderPlacedEvent(order));
  }
}
