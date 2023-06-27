import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private postRepository: Repository<Comment>,
  ) {}

  findAll(): Promise<Comment[]> {
    return this.postRepository.find();
  }

  find(arg: any): Promise<Comment[]> {
    return this.postRepository.find(arg);
  }

  findOne(arg: any, options?: any): Promise<Comment> {
    return this.postRepository.findOneBy(arg);
  }

  findOneWhere(arg: any, options?: any): Promise<Comment> {
    return this.postRepository.findOne(arg);
  }

  insert(post: Comment): Promise<InsertResult> {
    return this.postRepository.insert(post);
  }

  update(arg: any, entity: Comment): Promise<UpdateResult> {
    return this.postRepository.update(arg , entity);
  }

  async remove(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}