import { collection, getDocs } from 'firebase/firestore/lite';

export const getAboutInfo = async(data) => {
    const snapshot = collection(data, 'About');
    const docs = await getDocs(snapshot);
    const list = docs.docs.map(doc => ({ id: doc.id, ...doc.data() }) );
    console.log(list);
}