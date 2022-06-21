import { Injectable } from '@nestjs/common';
import { addNewPost } from 'src/model/addNewPost';

@Injectable()
export class PostService {
  async AddNewPost(subject: number, content: string) {
    try {
      await addNewPost(subject, content);
      return true;
    } catch (err) {
      return err;
    }
  }
}
