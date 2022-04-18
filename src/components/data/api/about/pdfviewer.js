import { collection, getDocs } from 'firebase/firestore/lite';

export const getPdf = async(data) => {
    let result = ''
    const snapshot = collection(data, 'Resume');
    const docs = await getDocs(snapshot);

    docs.docs.map(doc => {
        result = doc.data().path
    });

    return result;
}