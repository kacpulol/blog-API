import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { Post as PostEntity } from '../post/entities/post.entity';
import { standardRes } from '../res/interface/standardRes.interface';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { BlogService } from './blog.service';
import { AddBlogValidator } from './dto/blog.addBlog.dto';
import { EditBlogValidator } from './dto/blog.editBlog.dto';
import { UUID } from './dto/blog.uuid.dto';
import { CommentValidator } from './dto/blog.comment.dto';
import { BlogCommentService } from './comment/blogComment.service';
import { Comment } from '../comment/entities/comment.entity';

@Controller('blog')
export class BlogController {
  constructor(
    private readonly blogService: BlogService,
    private readonly blogCommentService: BlogCommentService,
  ) {}

  //comment part

  @Get('comment/:id')
  getComment(@Param() param: UUID): Promise<Comment> {
    return this.blogCommentService.getComment(param.id);
  }

  @Get('comment')
  getAllComments(): Promise<Comment[]> {
    return this.blogCommentService.getAllComments();
  }

  @UseGuards(JwtAuthGuard)
  @Post('comment')
  addComment(
    @Body() body: CommentValidator,
    @Request() req,
  ): Promise<standardRes> {
    return this.blogCommentService.addComment(body, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Put('comment')
  editComment(
    @Body() body: CommentValidator,
    @Request() req,
  ): Promise<standardRes> {
    return this.blogCommentService.editComment(body, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('comment/:id')
  deleteComment(@Param() param: UUID, @Request() req): Promise<standardRes> {
    return this.blogCommentService.deleteComment(param.id, req.user);
  }

  // post part

  @Get(':id')
  getPost(@Param() param: UUID): Promise<PostEntity> {
    return this.blogService.getPost(param.id);
  }

  @Get()
  getAllPosts(): Promise<PostEntity[]> {
    return this.blogService.getAllPosts();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  addPost(
    @Body() body: AddBlogValidator,
    @Request() req,
  ): Promise<standardRes> {
    return this.blogService.addPost(body, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Put()
  editPost(
    @Body() body: EditBlogValidator,
    @Request() req,
  ): Promise<standardRes> {
    return this.blogService.editPost(body, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deletePost(@Param() param: UUID, @Request() req): Promise<standardRes> {
    return this.blogService.deletePost(param.id, req.user);
  }
}
