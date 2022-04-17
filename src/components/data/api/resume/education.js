import { collection, getDocs, query, orderBy } from 'firebase/firestore/lite';

export const getEducation = async(data) => {
    const snapshot = collection(data, 'Education');
    const result = {
        datasets: []
    }

    const docs = await getDocs(query(snapshot, orderBy('order')));
    docs.docs.map(doc => {
        result.datasets.push({ title: doc.data().icon, subtitle1: doc.data().course, subtitle2: doc.data().school, subtitle3: `${doc.data().startDate} - ${doc.data().endDate}`, type: 'icon' })
    });
    
    return result;
}