import { Table, Column, Model, DataType, ForeignKey, BelongsTo, UpdatedAt } from 'sequelize-typescript';  

import { User } from '../../users/entities/user.entity';
import { Stock } from '../../stocks/entities/stock.entity';  
 

export enum OrderType {
  BUY = 'buy',
  SELL = 'sell',
}

export enum orderStatus {
  OPEN = 'open',
  CLOSED = 'closed',
}


  
@Table({  
  underscored: true,  
  timestamps: false,  
})  
export class Order extends Model {  
  @Column({  
    type: DataType.INTEGER,  
    autoIncrement: true,  
    primaryKey: true,  
  })  
  id: number;  
  
  @ForeignKey(() => User)  
  @Column(DataType.INTEGER)  
  userId: number;  
  
  @BelongsTo(() => User)  
  user: User;  
  
  @ForeignKey(() => Stock)  
  @Column(DataType.INTEGER)  
  stockId: number;  
  
  @BelongsTo(() => Stock)  
  stock: Stock;  
  
  @Column({ type: DataType.ENUM, values: Object.values(OrderType) })  
  type: OrderType;  
  
  @Column(DataType.INTEGER)  
  quantity: number;  
  
  @Column(DataType.DOUBLE)  
  price: number;  
  
  @Column({ type: DataType.ENUM, values: Object.values(orderStatus), defaultValue: orderStatus.OPEN })  
  status: orderStatus;  
  
  @Column({ type: DataType.DATE, defaultValue: DataType.NOW })  
  placedAt: Date;  
  
  @UpdatedAt  
  @Column(DataType.DATE)  
  updatedAt: Date;  
}  
