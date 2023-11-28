import { Sequelize } from 'sequelize-typescript';
import { Order } from '../../orders/entities/order.entity';
import { User } from '../../users/entities/user.entity';
import { Stock } from '../../stocks/entities/stock.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';
import { databaseConfig } from '../config/config';
import {
  ORDER_REPOSITORY,
  STOCK_REPOSITORY,
  SEQUELIZE,
  USER_REPOSITORY,
} from '../../constants/index';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const config = databaseConfig;
      const sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: process.env.DB_HOST,
          port: 5324,
          dialect: 'postgres',
        },
      );
      
      // All models should be here
      sequelize.addModels([User, Order, Stock, Transaction]);

      // auto migrate only if env is local
      // if (process.env.NODE_ENV === DEVELOPMENT) {
      //   await sequelize.sync();
      // }

      try {
        // tests for connection
        await sequelize.authenticate();
        console.log('Sequelize connection established successfully!');
      } catch (error) {
        // throw custom error
        console.error('Sequelize connection error:', error);
        process.exit(1);
      }
      return sequelize;
    },
  },
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
  {
    provide: ORDER_REPOSITORY,
    useValue: Order,
  },
  {
    provide: STOCK_REPOSITORY,
    useValue: Stock,
  },
];
