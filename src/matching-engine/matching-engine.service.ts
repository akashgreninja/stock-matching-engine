import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';
import { TransactionsService } from 'src/transactions/transactions.service';

@Injectable()
export class MatchingEngineService {
  constructor(
    private readonly redisService: RedisService,
    private readonly transactionService: TransactionsService,
  ) {}

  async matchOrders() {
    const client = this.redisService.getClient();

    while (true) {
      const buyOrder = await client.zrange('buyOrders', -1, -1); // Get top buy order
      const sellOrder = await client.zrange('sellOrders', 0, 0); // Get top sell order

      if (!buyOrder[0] || !sellOrder[0]) break; // Exit if either list is empty

      const topBuy = JSON.parse(buyOrder[0]);
      const topSell = JSON.parse(sellOrder[0]);

      if (-topBuy.price >= topSell.price) {
        const tradePrice =
          topSell.placedAt < topBuy.placedAt ? topSell.price : -topBuy.price;
        const tradeQuantity = Math.min(topBuy.quantity, topSell.quantity);

        this.transactionService.create({
          buyOrder: topBuy.id,
          sellOrder: topSell.id,
          quantity: tradeQuantity,
          price: tradePrice,
          timestamp: new Date(),
        });

        topBuy.quantity -= tradeQuantity;
        topSell.quantity -= tradeQuantity;

        if (topBuy.quantity === 0) await client.zrem('buyOrders', buyOrder[0]);
        if (topSell.quantity === 0)
          await client.zrem('sellOrders', sellOrder[0]);
      } else {
        break; // No more matches possible
      }
    }
  }
}
