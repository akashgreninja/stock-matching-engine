import { Module } from '@nestjs/common';
import { MatchingEngineService } from './matching-engine.service';
import { MatchingEngineController } from './matching-engine.controller';
import { RedisModule } from 'src/redis/redis.module';
import { TransactionsModule } from 'src/transactions/transactions.module';

@Module({
  imports: [RedisModule, TransactionsModule],
  controllers: [MatchingEngineController],
  providers: [MatchingEngineService],
  exports: [MatchingEngineService],
})
export class MatchingEngineModule {}
