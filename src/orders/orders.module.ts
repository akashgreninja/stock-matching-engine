import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { RedisModule } from 'src/redis/redis.module';
import { OrdersRepository } from './orders.repository';

import { Order } from './entities/order.entity';
import { OrderEmitterModule } from 'src/order-emitter/order-emitter.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SequelizeModule } from '@nestjs/sequelize';
@Module({
  imports: [
    SequelizeModule.forFeature([Order]),
    
    RedisModule,
    EventEmitterModule.forRoot(),
    OrderEmitterModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService],
})
export class OrdersModule {}
