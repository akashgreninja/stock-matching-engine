import { Injectable, Logger } from '@nestjs/common';
import Redis from 'ioredis';
import { Order, OrderType } from 'src/orders/entities/order.entity';

@Injectable()
export class RedisService {
  private client: Redis;

  constructor() {
    this.client = new Redis();
  }

  getClient(): Redis {
    return this.client;
  }

  async addOrder(order: Order): Promise<void> {
    const client = this.getClient();
    const key = order.type === OrderType.BUY ? 'buyOrders' : 'sellOrders';
    const score = order.type === OrderType.BUY ? -order.price : order.price;

    await client.zadd(key, score.toString(), JSON.stringify(order));
  }

  async removeOrder(order: Order) {
    const client = this.getClient();
    const key = order.type === OrderType.BUY ? 'buyOrders' : 'sellOrders';
    await client.zrem(key, JSON.stringify(order));
  }
}
