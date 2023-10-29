import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/entities/order.entity';

@Injectable()
@Injectable()
export class MatchingEngineService {
  private buyOrders: Order[] = [];
  private sellOrders: Order[] = [];

  matchOrders() {
    while (this.buyOrders.length > 0 && this.sellOrders.length > 0) {
      const topBuy = this.buyOrders[0];
      const topSell = this.sellOrders[0];

      if (topBuy.price >= topSell.price) {
        const tradePrice =
          topSell.placedAt < topBuy.placedAt ? topSell.price : topBuy.price;
        const tradeQuantity = Math.min(topBuy.quantity, topSell.quantity);

        // Update orders
        topBuy.quantity -= tradeQuantity;
        topSell.quantity -= tradeQuantity;

        if (topBuy.quantity === 0) this.buyOrders.shift();
        if (topSell.quantity === 0) this.sellOrders.shift();

        // Transaction object
        const trade = {
          price: tradePrice,
          quantity: tradeQuantity,
          buyOrder: topBuy,
          sellOrder: topSell,
          timestamp: new Date().toISOString(),
        };

        // TODO: Add the transaction service to record the trade
        // this.transactionService.recordTrade(trade);
      } else {
        break; // No more matches possible
      }
    }
  }
}
