import { Table, Column, Model, DataType } from 'sequelize-typescript';  
import { USER_GENDER, USER_ROLE } from '../../constants/';  
  
@Table({  
  tableName: 'user',  
  underscored: true,  
  timestamps: false,  
})  
export class User extends Model {  
  @Column({  
    type: DataType.BIGINT,  
    autoIncrement: true,  
    primaryKey: true,  
  })  
  id: number;  
  
 
  
  @Column({ type: DataType.STRING, unique: true })  
  email: string;  
  
  @Column({ type: DataType.ENUM, values: Object.values(USER_GENDER) })  
  gender: string;  
  
  @Column({ type: DataType.STRING, unique: true })  
  phone: string;  
  
  @Column({ type: DataType.STRING, unique: true })  
  firebaseId: string;  
  
  @Column(DataType.STRING)  
  firstName: string;  
  
  @Column(DataType.STRING)  
  middleName: string;  
  
  @Column(DataType.STRING)  
  lastName: string;  
  
  @Column(DataType.BOOLEAN)  
  emailVerified: boolean;  
  
  @Column(DataType.BOOLEAN)  
  phoneVerified: boolean;  
  
  @Column(DataType.STRING)  
  country: string;  
  
  @Column(DataType.STRING)  
  state: string;  
  
  @Column({ type: DataType.STRING, unique: true, field: 'referral_code' })  
  referralCode: string;  
  
  @Column({  
    type: DataType.DECIMAL(32, 8),  
    field: 'invested_amount',  
    defaultValue: 0,  
  })  
  investedAmount: number;  
  
  @Column({  
    type: DataType.DECIMAL(32, 8),  
    field: 'realized_amount',  
    defaultValue: 0,  
  })  
  realizedAmount: number;  
  
  @Column(DataType.STRING)  
  profilePicture: string;  
  
  @Column(DataType.BIGINT)  
  referrer: string;  
  
  @Column({ type: DataType.STRING, defaultValue: 'INR' })  
  currency: string;  
  
  @Column({ type: DataType.ENUM, values: Object.values(USER_ROLE) })  
  role: string;  
  
  @Column(DataType.BOOLEAN)  
  isActive: boolean;  
  
  @Column(DataType.BOOLEAN)  
  isDeleted: boolean;  
  
  @Column(DataType.BOOLEAN)  
  isKycDone: boolean;  
  
  @Column(DataType.STRING)  
  lockBookId: string;  
  
  @Column(DataType.STRING)  
  mainBookId: string;  
  
  @Column({  
    type: DataType.JSON,  
    defaultValue: {  
      lock: null,  
      main: null,  
      short: null,  
    },  
  })  
  book: any;  
  
  @Column(DataType.JSONB)  
  metadata: Record<string, any>;  
}  
