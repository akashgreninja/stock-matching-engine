import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findOneById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOneById(id);
  }

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOneByUsername(username);
  }

  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.create(user);
  }

  async delete(id: number): Promise<void> {
    return this.usersRepository.delete(id);
  }
}
