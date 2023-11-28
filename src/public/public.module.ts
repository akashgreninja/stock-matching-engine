import { Module } from '@nestjs/common';
import { PublicService } from './public.service';
import { PublicController } from './public.controller';

@Module({
  imports: [],
  controllers: [PublicController],
  providers: [PublicService]
})
export class PublicModule {}
