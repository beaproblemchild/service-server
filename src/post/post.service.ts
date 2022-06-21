import { Injectable } from '@nestjs/common';
import { addNewPost } from 'src/model/addNewPost';

@Injectable()
export class PostService {
  async AddNewPost(subject: number, content: string) {
    try {
      const result = await addNewPost(subject, content);
      console.log(result);
      return true;
    } catch (err) {
      return err;
    }
  }
}
