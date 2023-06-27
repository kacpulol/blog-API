import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { BlogModule } from './blog/blog.module';
import { PersonalModule } from './personal/personal.module';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { CommentService } from './comment/comment.service';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({ envFilePath: '.env' }),
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    BlogModule,
    PersonalModule,
],
  controllers: [AppController],
  providers: [AppService, UserService, PostService, CommentService],
})
export class AppModule {}
