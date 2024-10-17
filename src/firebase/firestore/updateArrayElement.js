import {doc, getDoc, updateDoc} from 'firebase/firestore';
import {firestoreDb} from '../../config';

/*
 collectionName:  Name of the Collection
  documentId:  id of the document in the collection
  arrayFieldName: name of the array field
  existingData: existing individul data in the array that needs to be updated
  newData: updated individal data in the array
  isDelete: for deleting the individual element
  validateBy: unique contraint to identfy the index of data in the array
*/
async function UpdateArrayElement(
  collectionName,
  documentId,
  arrayFieldName,
  existingData,
  newData,
  isDelete,
  validateBy,
) {
  try {
    const docRef = doc(firestoreDb, collectionName, documentId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return {success: false, message: `Document with ID "${documentId}" does not exist.`};
    }

    const dataArray = docSnap.data()[arrayFieldName] || [];
    const dataIndex = dataArray.findIndex(item => item[validateBy] === existingData[validateBy]);
    if (dataIndex === -1) {
      return {
        success: false,
        message: `Element "${existingData}" does not exist in the array field "${arrayFieldName}" in document with ID "${documentId}".`,
      };
    }
    if (isDelete) {
      dataArray.splice(dataIndex, 1);
    } else {
      dataArray[dataIndex] = newData;
    }
    await updateDoc(docRef, {
      [arrayFieldName]: dataArray,
    });

    return {
      success: true,
      message: `Element updated in the array field "${arrayFieldName}" in document with ID "${documentId}".`,
    };
  } catch (error) {
    console.error('Error updating array element:', error);
    return {success: false, message: 'Error updating array element', error};
  }
}

export default UpdateArrayElement;
