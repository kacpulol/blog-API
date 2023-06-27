import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostSchema } from './post.schema';

@Module({
  imports: [TypeOrmModule.forFeature([PostSchema])],
  providers: [PostService],
  exports: [PostService, TypeOrmModule],
})
export class PostModule {}
