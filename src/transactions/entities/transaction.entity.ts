import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';  
import { Order } from 'src/orders/entities/order.entity';  
  
@Table({  
  underscored: true,  
  timestamps: false,  
})  
export class Transaction extends Model {  
  @Column({  
    type: DataType.INTEGER,  
    autoIncrement: true,  
    primaryKey: true,  
  })  
  id: number;  
  
  @ForeignKey(() => Order)  
  @Column(DataType.INTEGER)  
  buyOrderId: number;  
  
  @BelongsTo(() => Order)  
  buyOrder: Order;  
  
  @ForeignKey(() => Order)  
  @Column(DataType.INTEGER)  
  sellOrderId: number;  
  
  @BelongsTo(() => Order)  
  sellOrder: Order;  
  
  @Column(DataType.INTEGER)  
  quantity: number;  
  
  @Column(DataType.DOUBLE)  
  price: number;  
  
  @Column(DataType.DATE)  
  timestamp: Date;  
}  
