import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentSchema } from './comment.schema';

@Module({
  imports: [TypeOrmModule.forFeature([CommentSchema])],
  providers: [CommentService],
  exports: [CommentService, TypeOrmModule],
})
export class CommentModule {}
