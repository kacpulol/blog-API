import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { UserModule } from '../user/user.module';
import { PostService } from '../post/post.service';
import { PostModule } from '../post/post.module';
import { BlogUserService } from './user/blogUser.service';
import { BlogCommentService } from './comment/blogComment.service';
import { CommentService } from '../comment/comment.service';
import { CommentModule } from '../comment/comment.module';
import { PersonalModule } from '../personal/personal.module';
import { PersonalService } from '../personal/personal.service';
@Module({
  imports: [UserModule, PostModule, CommentModule, PersonalModule],
  providers: [BlogService, PostService, BlogUserService, BlogCommentService, CommentService, PersonalService],
  controllers: [BlogController],
})
export class BlogModule {}
