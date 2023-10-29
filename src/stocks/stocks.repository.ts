import { InjectRepository } from '@nestjs/typeorm';
import { Stock } from './entities/stock.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StocksRepository {
  constructor(
    @InjectRepository(Stock)
    private readonly repository: Repository<Stock>,
  ) {}

  async findOneById(id: number): Promise<Stock | undefined> {
    return await this.repository.findOneBy({ id: id });
  }

  async findOneByTicker(ticker: string): Promise<Stock | undefined> {
    return await this.repository.findOneBy({ ticker });
  }

  async findAll(): Promise<Stock[]> {
    return await this.repository.find();
  }

  async create(stock: Partial<Stock>): Promise<Stock> {
    const newStock = this.repository.create(stock);
    return await this.repository.save(newStock);
  }

  async save(stock: Partial<Stock>): Promise<Stock> {
    return await this.repository.save(stock);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
