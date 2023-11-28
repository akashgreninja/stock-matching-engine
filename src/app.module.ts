import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { StocksModule } from './stocks/stocks.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TransactionsModule } from './transactions/transactions.module';
import { DatabaseModule } from './database/models/database.module';
import { MatchingEngineModule } from './matching-engine/matching-engine.module';
import { RedisModule } from './redis/redis.module';
import { OrderEmitterModule } from './order-emitter/order-emitter.module';
import { PublicController } from './public/public.controller';
import { PublicModule } from './public/public.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    StocksModule,
    UsersModule,
    OrdersModule,
    TransactionsModule,
    MatchingEngineModule,
    RedisModule,
    OrderEmitterModule,
    PublicModule,
    DatabaseModule,
  ],
  controllers: [AppController, PublicController],
  providers: [AppService],
})
export class AppModule {}
