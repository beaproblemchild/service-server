import { Controller, Get, Body, Post, Res, Param } from '@nestjs/common';
import { createHmac } from 'crypto';
import { adminPassword } from 'src/app.secure';
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
    const psdHash = createHmac('sha256', '')
      .update(adminPassword)
      .digest('base64');
    const injectData: replyData = {
      replyTo: params.id,
      content: Body.content,
      isAdmin: psdHash === Body.token,
    };
    return this.ReplyService.AddNewReply(injectData);
  }
}
