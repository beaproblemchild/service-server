import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../serviceAccountKey.json';
const serviceAccountJson = JSON.stringify(serviceAccount);
initializeApp({
  credential: cert(serviceAccountJson),
});

const db = getFirestore();
export default db;
