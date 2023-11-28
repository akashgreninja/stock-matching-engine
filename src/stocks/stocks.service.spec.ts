import { Test, TestingModule } from '@nestjs/testing';
import { StocksRepository } from './stocks.service';

describe('StocksService', () => {
  let service: TestingModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StocksRepository],
    }).compile();

    service = module.get<StocksService>(StocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
