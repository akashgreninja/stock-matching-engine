import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { Order, OrderType } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';
import { User } from 'src/users/entities/user.entity';
import { Stock } from 'src/stocks/entities/stock.entity';

@Injectable()
export class OrdersService {
  constructor(
    private readonly redisService: RedisService,
    private readonly ordersRepository: OrdersRepository,
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
      return savedOrder;
    } catch (error) {
      throw error;
    }
  }
}
