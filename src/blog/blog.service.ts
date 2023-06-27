import { ConflictException, Injectable } from '@nestjs/common';
import { standardRes } from '../res/interface/standardRes.interface';
import { Post } from '../post/entities/post.entity';
import { PostService } from '../post/post.service';
import { User } from '../user/entities/user.entity';
import { AddBlogValidator } from './dto/blog.addBlog.dto';
import { EditBlogValidator } from './dto/blog.editBlog.dto';

@Injectable()
export class BlogService {
  constructor(private postService: PostService) {}

  async addPost(body: AddBlogValidator, user: User): Promise<standardRes> {
    const post: Post = {
      title: body.title,
      author: user,
      contents: body.contents,
    };

    if (await this.postService.findOne({ title: body.title }))
      throw new ConflictException('There is already a post with that title');

    await this.postService.insert(post);
    return { message: 'success', statusCode: 201 };
  }

  async editPost(body: EditBlogValidator, user: User): Promise<standardRes> {
    const post: Post = {
      id: body.id,
      title: body.title,
      contents: body.contents,
    };
    const postFindedById = await this.postService.findOne({ id: body.id });

    if (!postFindedById)
      throw new ConflictException('No post with the given id was found');

    const postFindedByTitle = await this.postService.findOne({
      title: body.title,
    });

    if (postFindedByTitle && postFindedByTitle.id != post.id)
      throw new ConflictException('There is already a post with that title');

    await this.postService.update({ id: body.id }, post);
    return { message: 'success', statusCode: 200 };
  }

  async deletePost(id: string, user: User): Promise<standardRes> {
    const postFindedById = await this.postService.findOne({id: id});
    if (!postFindedById)
      throw new ConflictException('No post with the given id was found');
    await this.postService.remove(id);
    return { message: 'success', statusCode: 200 };
  }


  async getPost(id: string): Promise<Post> {
    return await this.postService.findOne({ id });
  }

  async getAllPosts(): Promise<Post[]> {
    return await this.postService.findAll();
  }
}
