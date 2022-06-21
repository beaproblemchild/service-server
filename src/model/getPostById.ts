import db from '../firebase';

export const getPostById = async (id: string) => {
  const problemsRef = db.collection('problems');
  return await problemsRef.where('id', '==', id).get();
};
