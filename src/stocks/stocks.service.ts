import { Injectable } from '@nestjs/common';    
import { InjectModel } from '@nestjs/sequelize';    
import { Stock } from './entities/stock.entity';    
  
@Injectable()    
export class StocksService {    
  constructor(    
    @InjectModel(Stock)    
    private readonly stockModel: typeof Stock,    
  ) {}    
  
  async findOneById(id: number): Promise<Stock | undefined> {    
    return await this.stockModel.findByPk(id);    
  }    
  
  async findOneByTicker(ticker: string): Promise<Stock | undefined> {    
    return await this.stockModel.findOne({ where: { ticker } });    
  }  
  
  async findAll(): Promise<Stock[]> {    
    return await this.stockModel.findAll();    
  }    
  
  async create(stock: Partial<Stock>): Promise<Stock> {    
    return await this.stockModel.create(stock);    
  }    
  
  async save(stock: Partial<Stock>): Promise<Stock> {    
    const [updatedStock] = await this.stockModel.upsert(stock, { returning: true });  
    return updatedStock;    
  }   
  
  async delete(id: number): Promise<void> {    
    await this.stockModel.destroy({ where: { id } });    
  }    
}    
