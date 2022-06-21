import db from '../firebase';

export const getAllList = async () => {
  const problemsRef = db.collection('problems');
  return await problemsRef.get();
};
