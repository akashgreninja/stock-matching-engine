import { Injectable } from '@nestjs/common';  
import { InjectModel } from '@nestjs/sequelize';  
import { User } from './entities/user.entity';  
  
@Injectable()  
export class UsersRepository {  
  constructor(  
    @InjectModel(User)  
    private readonly userModel: typeof User,  
  ) {}  
  
  async findOneById(id: number): Promise<User | undefined> {  
    return await this.userModel.findByPk(id);  
  }  
  
  async findOneByUsername(firstName: string): Promise<User | undefined> {  
    return await this.userModel.findOne({ where: { firstName } });  
  }  
  
  async create(user: Partial<User>): Promise<User> {  
    return await this.userModel.create(user);  
  }  
  
  async createByOtp(user: Partial<User>): Promise<User> {  
    return await this.userModel.create(user);  
  }  
  
  async delete(id: string): Promise<void> {  
    await this.userModel.destroy({ where: { id } });  
  }  
}  
