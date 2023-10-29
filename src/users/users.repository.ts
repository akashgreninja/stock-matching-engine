import { Repository, FindOneOptions } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findOneById(id: number): Promise<User | undefined> {
    return await this.repository.findOneBy({ id });
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    const options: FindOneOptions<User> = {
      where: { username },
    };
    return await this.repository.findOne(options);
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
