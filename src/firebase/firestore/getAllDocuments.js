import {firestoreDb} from '../../config';
import {collection, getDocs, query, where} from 'firebase/firestore';

export default async function getAllDocuments(collectionName, reference) {
  try {
    const collectionRef = collection(firestoreDb, collectionName);
    let querySnapshot;

    if (reference) {
      querySnapshot = await getDocs(query(collectionRef, reference));
    } else {
      querySnapshot = await getDocs(collectionRef);
    }

    const documents = querySnapshot.docs.map(doc => doc.data());
    return documents;
  } catch (error) {
    console.error('Error getting documents:', error);
    throw error;
  }
}
