import { Injectable } from '@nestjs/common';
import { addNewPost } from 'src/model/addNewPost';
import { getAllList } from 'src/model/getAllList';
import { getSubjectList } from 'src/model/getSubject';
import { injectData } from './post.interface';

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

  async GetAll() {
    try {
      const snapshot = await getAllList();
      let data: injectData[] = [];
      snapshot.forEach((doc: injectData | any) => {
        data.push(doc.data());
      });
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async GetSubject(subject: number) {
    try {
      const snapshot = await getSubjectList(subject);
      let data: injectData[] = [];
      snapshot.forEach((doc: injectData | any) => {
        data.push(doc.data());
      });
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
