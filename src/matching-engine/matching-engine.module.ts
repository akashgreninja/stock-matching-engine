import { Module, forwardRef } from '@nestjs/common';
import { MatchingEngineService } from './matching-engine.service';
import { RedisModule } from 'src/redis/redis.module';
import { TransactionsModule } from 'src/transactions/transactions.module';
import { StocksModule } from 'src/stocks/stocks.module';
import { OrdersModule } from 'src/orders/orders.module';

@Module({
  imports: [
    RedisModule,
    TransactionsModule,
    StocksModule,
    forwardRef(() => OrdersModule),
  ],
  providers: [MatchingEngineService],
  exports: [MatchingEngineService],
})
export class MatchingEngineModule {}
