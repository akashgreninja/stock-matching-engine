import { Table, Column, Model, DataType, UpdatedAt } from 'sequelize-typescript';  
  
@Table({  
  underscored: true,  
  timestamps: false,  
})  
export class Stock extends Model {  
  @Column({  
    type: DataType.INTEGER,  
    autoIncrement: true,  
    primaryKey: true,  
  })  
  id: number;  
  
  @Column({ type: DataType.STRING(50) })  
  ticker: string;  
  
  @Column({ type: DataType.STRING(200) })  
  name: string;  
  
  @Column(DataType.DOUBLE)  
  currentPrice: number;  
  
  @UpdatedAt  
  @Column(DataType.DATE)  
  updatedAt: Date;  
}  
