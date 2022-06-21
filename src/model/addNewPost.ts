import db from '../firebase';
import type { injectData } from 'src/post/post.interface';
import * as crypto from 'crypto';

export const addNewPost = async (
  subject: number,
  content: string,
): Promise<FirebaseFirestore.WriteResult> => {
  const time = Date.now();
  const hash = crypto.createHmac('sha256', 'kkk').update(time + content);
  const injectData: injectData = {
    id: hash.digest('hex'),
    time: time,
    subject: subject,
    content: content,
  };
  const path = db.collection(subject.toString()).doc(time.toString());
  const result = await path.set(injectData);
  return result;
};
