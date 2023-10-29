import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from './config/config';
import { StocksModule } from './stocks/stocks.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { TransactionsModule } from './transactions/transactions.module';
import { User } from './users/entities/user.entity';
import { Stock } from './stocks/entities/stock.entity';
import { Order } from './orders/entities/order.entity';
import { Transaction } from './transactions/entities/transaction.entity';
import { MatchingEngineModule } from './matching-engine/matching-engine.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.postgresql.host'),
        port: configService.get<number>('database.postgresql.port'),
        database: configService.get<string>('database.postgresql.dbName'),
        username: configService.get<string>('database.postgresql.username'),
        password: configService.get<string>('database.postgresql.password'),
        entities: [User, Stock, Order, Transaction],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    StocksModule,
    UsersModule,
    OrdersModule,
    TransactionsModule,
    MatchingEngineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
