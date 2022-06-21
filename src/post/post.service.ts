import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  getAll(): string {
    return 'hehe';
  }
}
