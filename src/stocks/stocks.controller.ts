import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }

  @Get('ticker/:ticker')
  findOneByTicker(@Param('ticker') ticker: string) {
    return this.stocksService.findOneByTicker(ticker);
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.stocksService.findOneById(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stocksService.remove(+id);
  }
}
