// comments/comment.controller.ts

import { Controller, Post, Body, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':userId/:petsitterId')
  async addComment(
    @Param('userId') userId: number,
    @Param('petsitterId') petsitterId: number,
    @Body() commentData: Partial<Comment>,
  ): Promise<Comment> {
    return this.commentService.addComment(userId, petsitterId, commentData);
  }
}
