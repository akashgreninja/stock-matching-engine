import { Module } from '@nestjs/common';
import { OrderEmitterService } from './order-emitter-service';
import { OrderListenerService } from './order-listener.service';
import { MatchingEngineModule } from 'src/matching-engine/matching-engine.module';

@Module({
  imports: [MatchingEngineModule],
  providers: [OrderEmitterService, OrderListenerService],
  exports: [OrderEmitterService, OrderListenerService],
})
export class OrderEmitterModule {}
