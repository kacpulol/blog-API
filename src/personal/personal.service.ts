import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { PersonalData } from './entities/personal.entity';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(PersonalData)
    private usersRepository: Repository<PersonalData>,
  ) {}

  findAll(): Promise<PersonalData[]> {
    return this.usersRepository.find();
  }

  findOne(arg: any): Promise<PersonalData> {
    return this.usersRepository.findOneBy(arg);
  }

  insert(user: PersonalData): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }

  find(arg: any): Promise<PersonalData[]> {
    return this.usersRepository.find(arg);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  update(arg: any, entity: PersonalData): Promise<UpdateResult> {
    return this.usersRepository.update(arg, entity);
  }
}
