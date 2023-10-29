import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { Order, OrderType, orderStatus } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';
import { User } from 'src/users/entities/user.entity';
import { Stock } from 'src/stocks/entities/stock.entity';
import { OrderEmitterService } from 'src/order-emitter/order-emitter-service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly redisService: RedisService,
    private readonly ordersRepository: OrdersRepository,
    private readonly orderEmitterService: OrderEmitterService,
  ) {}

  async addOrder(order: CreateOrderDto) {
    try {
      const newOrder = new Order();
      newOrder.user = { id: order.userId } as User;
      newOrder.stock = { id: order.stockId } as Stock;
      newOrder.price = order.price;
      newOrder.quantity = order.quantity;
      newOrder.type = order.type;

      const savedOrder = await this.ordersRepository.save(newOrder);
      await this.redisService.addOrder(savedOrder);
      this.orderEmitterService.emitOrderPlacedEvent(newOrder);
      return savedOrder;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number): Promise<void> {
    const order = await this.ordersRepository.findById(id);

    order.status = orderStatus.CLOSED;
    order.updatedAt = new Date();

    await this.ordersRepository.save(order);
  }
}
