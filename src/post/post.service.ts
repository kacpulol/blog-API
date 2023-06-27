import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  find(arg: any): Promise<Post[]> {
    return this.postRepository.find(arg);
  }

  findOne(arg: any): Promise<Post> {
    return this.postRepository.findOneBy(arg);
  }

  findOneWhere(arg: any): Promise<Post> {
    return this.postRepository.findOne(arg);
  }

  insert(post: Post): Promise<InsertResult> {
    return this.postRepository.insert(post);
  }

  update(arg: any, entity: Post): Promise<UpdateResult> {
    return this.postRepository.update(arg , entity);
  }

  async remove(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}