import db from '../firebase';

export const getSubjectList = async (subjectSym: number) => {
  const problemsRef = db.collection('problems');
  return await problemsRef.where('subject', '==', subjectSym).get();
};
