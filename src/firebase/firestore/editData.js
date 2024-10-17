import {firestoreDb} from '../../config';
import {doc, updateDoc} from 'firebase/firestore';

export default async function editData(collection, id, newData) {
  let result = null;
  let error = null;

  try {
    await updateDoc(doc(firestoreDb, collection, id), newData);
    
    result = {success: true};
  } catch (e) {
    error = e;
    console.error('Error editing document:', e);
    result = {success: false};
  }

  return {result, error};
}
