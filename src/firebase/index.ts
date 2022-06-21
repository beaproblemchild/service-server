import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { serviceAccountKey } from '../serviceAccount';
initializeApp({
  credential: cert(serviceAccountKey),
});

const db = getFirestore();
export default db;
