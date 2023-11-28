import { Injectable } from '@nestjs/common';  
import { InjectModel } from '@nestjs/sequelize';  
import { Stock } from './entities/stock.entity';  
  
@Injectable()  
export class StocksRepository {  
  constructor(  
    @InjectModel(Stock)  
    private readonly StockModel: typeof Stock,  
  ) {}  
  
  async findOneById(id: number): Promise<Stock | undefined> {  
    return await this.StockModel.findByPk(id);  
  }  
  
  async findOneByStockname(firstName: string): Promise<Stock | undefined> {  
    return await this.StockModel.findOne({ where: { firstName } });  
  }  
  
  async create(Stock: Partial<Stock>): Promise<Stock> {  
    return await this.StockModel.create(Stock);  
  }  
  
  async createByOtp(Stock: Partial<Stock>): Promise<Stock> {  
    return await this.StockModel.create(Stock);  
  }  
  
  async delete(id: number): Promise<void> {  
    await this.StockModel.destroy({ where: { id } });  
  }  
}  
