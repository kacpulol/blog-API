import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  find(arg: any): Promise<User[]> {
    return this.usersRepository.find(arg);
  }

  findOne(arg: any): Promise<User> {
    return this.usersRepository.findOneBy(arg);
  }

  findOneWhere(arg: any): Promise<User> {
    return this.usersRepository.findOne(arg);
  }

  update(arg: any, entity: User): Promise<UpdateResult> {
    return this.usersRepository.update(arg, entity);
  }

  insert(user: User): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  save(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
