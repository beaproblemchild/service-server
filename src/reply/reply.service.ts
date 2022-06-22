import { Injectable } from '@nestjs/common';
import { getRepliesById } from 'src/model/getRepliesById';
import { addNewReply } from 'src/model/addReply';
import { replyData } from './reply.interface';

@Injectable()
export class ReplyService {
  async AddNewPost(injectData: replyData) {
    try {
      await addNewReply(injectData);
      return true;
    } catch (err) {
      return err;
    }
  }

  async GetReply(id: string) {
    try {
      const snapshot = await getRepliesById(id);
      let data: replyData[] = [];
      snapshot.forEach((doc: replyData | any) => {
        data.push(doc.data());
      });
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
