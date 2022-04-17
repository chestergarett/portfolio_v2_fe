import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite';

export const getWorkLocation = async(data) => {
    const docRef = collection(data, 'PreferredLocations');
    const docSnap = await getDocs(docRef)
    let result = {
        labels: [],
        data: [],
    }

    docSnap.forEach((doc) => {
        result.labels.push(doc.data().location)
        result.data.push([doc.data().coordinates.latitude, doc.data().coordinates.longitude])
    })

    return result;
}
  