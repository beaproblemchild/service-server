import { Controller, Get, Body, Post, Res } from '@nestjs/common';
import { PostService } from './post.service';
import type { addPostParams } from './post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}
  @Post('/add')
  getAll(@Body() params) {
    console.log(params);
    return this.PostService.AddNewPost(params.subject, params.content);
  }
}
