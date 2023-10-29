import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order, OrderType, orderStatus } from './entities/order.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectRepository(Order)
    private readonly repository: Repository<Order>,
  ) {}

  async findById(id: number): Promise<Order | undefined> {
    return await this.repository.findOneBy({ id });
  }
  async findAllByUserId(userId: number): Promise<Order[]> {
    const options: FindManyOptions = {
      where: { user: { id: userId } },
    };
    return await this.repository.find(options);
  }

  async findAllByStockId(stockId: number): Promise<Order[]> {
    const options: FindManyOptions = {
      where: { stock: { id: stockId } },
    };
    return await this.repository.find(options);
  }

  async findActiveSellOrderByUserId(
    userId: number,
  ): Promise<Order[] | undefined> {
    const options: FindManyOptions = {
      where: {
        user: { id: userId },
        type: OrderType.SELL,
        status: orderStatus.OPEN,
      },
      order: { placedAt: 'ASC' },
    };
    return await this.repository.find(options);
  }

  async findActiveSellOrderByStockId(
    stockId: number,
  ): Promise<Order[] | undefined> {
    const options: FindManyOptions = {
      where: {
        stock: { id: stockId },
        type: OrderType.SELL,
        status: orderStatus.OPEN,
      },
      order: { placedAt: 'ASC' },
    };
    return await this.repository.find(options);
  }

  async findActiveBuyOrderByUserId(
    userId: number,
  ): Promise<Order[] | undefined> {
    const options: FindManyOptions = {
      where: {
        user: { id: userId },
        type: OrderType.BUY,
        status: orderStatus.OPEN,
      },
      order: { placedAt: 'ASC' },
    };
    return await this.repository.find(options);
  }

  async findActiveBuyOrderByStockId(
    stockId: number,
  ): Promise<Order[] | undefined> {
    const options: FindManyOptions = {
      where: {
        stock: { id: stockId },
        type: OrderType.BUY,
        status: orderStatus.OPEN,
      },
      order: { placedAt: 'ASC' },
    };
    return await this.repository.find(options);
  }

  async save(order: Partial<Order>): Promise<Order> {
    return await this.repository.save(order);
  }
}
