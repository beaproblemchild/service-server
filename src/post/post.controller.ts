import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import type { addPostParams } from './post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}
  @Get('/add/')
  getAll(@Param() params: addPostParams) {
    return this.PostService.AddNewPost(params.subject, params.content);
  }
}
