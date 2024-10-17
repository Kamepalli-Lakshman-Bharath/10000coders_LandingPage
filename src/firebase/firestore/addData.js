import {firestoreDb} from '../../config';
import {doc, setDoc} from 'firebase/firestore';

export default async function addData(collection, id, data, reference) {
  let result = null;
  let error = null;
  let {merge} = reference || {merge: false};

  try {
    merge
      ? await setDoc(doc(firestoreDb, collection, id), data, {merge: true})
      : await setDoc(doc(firestoreDb, collection, id), data);

    result = {success: true};
  } catch (e) {
    error = e;
    console.error('Error adding document:');
    result = {success: false};
  }

  return {result, error};
}
