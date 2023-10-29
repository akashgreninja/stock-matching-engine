import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOneById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOneById(id);
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneByUsername(username);
  }

  async create(user: Partial<User>): Promise<User> {
    return this.usersRepository.create(user);
  }

  async delete(id: number): Promise<void> {
    return this.usersRepository.delete(id);
  }
}
