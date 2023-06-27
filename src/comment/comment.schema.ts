import { EntitySchema } from 'typeorm';
import { Comment } from './entities/comment.entity';

export const CommentSchema = new EntitySchema<Comment>({
  name: 'Comment',
  target: Comment,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    post: {
      type: String,
    },
    author: {
      type: String,
    },
    comment: {
      type: String,
    },
    contents: {
      type: String,
    },
  },
});