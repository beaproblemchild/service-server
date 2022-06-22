import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [ConfigModule.forRoot(), PostModule, ReplyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
