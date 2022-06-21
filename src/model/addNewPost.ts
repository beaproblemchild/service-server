import db from '../firebase';
import type { injectData } from 'src/post/post.interface';

const addNewPost = async (
  subject: number,
): Promise<FirebaseFirestore.WriteResult> => {
  const time = Date.now();
  const injectData: injectData = {
    id: '',
    time: time,
    subject: subject,
    content: '',
  };
  const path = db.collection(subject.toString()).doc(time.toString());
  const result = await path.set(injectData);
  return result;
};
