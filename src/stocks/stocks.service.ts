import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { StocksRepository } from './stocks.repository';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StocksService {
  constructor(private readonly stocksRepository: StocksRepository) {}

  create(createStockDto: CreateStockDto): Promise<Stock> {
    return this.stocksRepository.create(createStockDto);
  }

  findAll(): Promise<Stock[] | undefined> {
    return this.stocksRepository.findAll();
  }

  findOneByTicker(ticker: string): Promise<Stock | undefined> {
    return this.stocksRepository.findOneByTicker(ticker);
  }

  findOneById(id: number): Promise<Stock | undefined> {
    return this.stocksRepository.findOneById(id);
  }

  remove(id: number): Promise<void> {
    return this.stocksRepository.delete(id);
  }
}
