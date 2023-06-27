import { EntitySchema } from 'typeorm';
import { Post } from './entities/post.entity';

export const PostSchema = new EntitySchema<Post>({
  name: 'Post',
  target: Post,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    contents: {
      type: String,
    },
  },
});