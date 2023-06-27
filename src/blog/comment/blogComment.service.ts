import { ConflictException, Injectable } from '@nestjs/common';
import { standardRes } from '../../res/interface/standardRes.interface';
import { User } from '../../user/entities/user.entity';
import { Comment } from '../../comment/entities/comment.entity';
import { CommentValidator } from '../dto/blog.comment.dto';
import { Post } from '../../post/entities/post.entity';
import { CommentService } from '../../comment/comment.service';
import { PostService } from '../../post/post.service';

@Injectable()
export class BlogCommentService {
  constructor(
    private commentService: CommentService,
    private postService: PostService,
  ) {}

  
  async getComment(id: string): Promise<Comment> {
    return await this.commentService.findOne({ id });
  }

  async getAllComments(): Promise<Comment[]> {
    return await this.commentService.findAll();
  }

  async addComment(body: CommentValidator, user: User): Promise<standardRes> {
    const comentedPost: Post = { id: body.post };
    const comment: Comment = {
      post: comentedPost,
      author: user,
      contents: body.contents,
    };
    if (!(await this.postService.findOne(comentedPost)))
      throw new ConflictException('No blog with the given id was found');

    await this.commentService.insert(comment);
    return { message: 'success', statusCode: 201 };
  }

  async editComment(body: CommentValidator, user: User): Promise<standardRes> {
    const comment: Comment = {
      id: body.id,
      contents: body.contents,
    };
    
    const commentFindedById = await this.commentService.findOneWhere({
      where: {id: body.id},
      relations: ['author'],
    });

    if (!commentFindedById)
      throw new ConflictException('No comment with the given id was found');

    if (commentFindedById.author.id != user.id)
      throw new ConflictException('You are not the author of this comment');

    await this.commentService.update({ id: body.id }, comment);
    return { message: 'success', statusCode: 200 };
  }

  async deleteComment(id: string, user: User): Promise<standardRes> {
    const commentFindedById = await this.commentService.findOneWhere({
      where: {id: id},
      relations: ['author'],
    });
    if (!commentFindedById)
      throw new ConflictException('No comment with the given id was found');
    if (commentFindedById.author.id != user.id)
      throw new ConflictException('You are not the author of this comment');
    await this.commentService.remove(id);
    return { message: 'success', statusCode: 200 };
  }
}
