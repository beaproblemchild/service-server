import { Controller, Get, Body, Post, Res, Param } from '@nestjs/common';
import { PostService } from './post.service';
import type { addPostParams } from './post.interface';

@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}
  @Post('/add')
  addOne(@Body() params: addPostParams) {
    return this.PostService.AddNewPost(params.subject, params.content);
  }

  @Get('/')
  getAll() {
    return this.PostService.GetAll();
  }

  @Get('/:id')
  getSubject(@Param() params) {
    console.log(params);
    return this.PostService.GetSubject(Number(params.id));
  }
}
