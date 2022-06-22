import { Controller, Get, Body, Post, Res, Param } from '@nestjs/common';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService) {}
}
