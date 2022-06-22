import db from 'src/firebase';

export const getRepliesById = async (id: string) => {
  const replyRef = db.collection('replies');
  return await replyRef.where('id', '==', id).get();
};
