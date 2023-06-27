import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { BlogUserService } from '../blog/user/blogUser.service';
import { PostService } from '../post/post.service';
import { PostModule } from '../post//post.module';
import { PersonalModule } from '../personal/personal.module';
import { PersonalService } from '../personal/personal.service';

@Module({
    imports: [TypeOrmModule.forFeature([UserSchema]), PostModule, PersonalModule],
    providers: [UserService, BlogUserService, PostService, PersonalService],
    exports: [UserService, TypeOrmModule],
    controllers: [UserController],
})
export class UserModule {}



