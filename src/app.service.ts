import { Injectable } from '@nestjs/common';
import { adminPassword } from './app.secure';
import { createHmac } from 'crypto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  adminAccess(key: string): string {
    if (key === adminPassword) {
      return createHmac('sha256', '').update(key).digest('base64');
    }
    return '';
  }
}
