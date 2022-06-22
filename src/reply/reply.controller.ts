import { Controller, Get, Body, Post, Res, Param } from '@nestjs/common';
import { replyData } from './reply.interface';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService) {}

  @Get('/:id')
  getRep(@Param() params) {
    return this.ReplyService.GetReply(params.id);
  }

  @Post('/new/:id')
  addNew(@Param() params, @Body() Body) {
    const injectData: replyData = {
      replyTo: params.id,
      content: Body.content,
      isAdmin: Body.isAdmin,
    };
    return this.ReplyService.AddNewPost(injectData);
  }
}
