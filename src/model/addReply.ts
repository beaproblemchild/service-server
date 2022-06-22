import db from 'src/firebase';
import type { replyData } from 'src/reply/reply.interface';

export const addNewReply = async (
  injectData: replyData,
): Promise<FirebaseFirestore.WriteResult> => {
  const ReplyRef = db.collection('replies');
  const time = Date.now();
  const result = await ReplyRef.doc(time.toString()).set(injectData);
  return result;
};
