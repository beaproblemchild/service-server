import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  adminAccess(key: string): {
    code: string;
  } {
    if (key === 'bapc1234') {
      return {
        code: 'success',
      };
    }
    return {
      code: 'fail',
    };
  }
}
