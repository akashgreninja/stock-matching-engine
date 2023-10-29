import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';
import { OrderPlacedEvent } from './order-placed.event';
import { MatchingEngineService } from 'src/matching-engine/matching-engine.service';

@Injectable()
export class OrderListenerService {
  constructor(private readonly matchingEngineService: MatchingEngineService) {}

  @OnEvent('order.placed')
  async handleOrderPlacedEvent(event: OrderPlacedEvent) {
    await this.matchingEngineService.matchOrders(event.order.stock.id);
  }
}
