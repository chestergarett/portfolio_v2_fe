import { collection, getDocs } from 'firebase/firestore/lite';

export const getPortfolioInfo = async(data) => {
    console.log('test message')
    const snapshot = collection(data, 'Portfolio');
    console.log('snapshot',snapshot)
    const docs = await getDocs(snapshot);
    const list = docs.docs.map(doc => ({ id: doc.id, ...doc.data() }) );
    console.log('list',list)
    return list;
}