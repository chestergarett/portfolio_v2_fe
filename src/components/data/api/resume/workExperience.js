import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite';

export const getWorkExperiences = async(data) => {
    const docRef = collection(data, 'WorkExperience');
    const docSnap = await getDocs(query(docRef, orderBy('startDate')))
    let result = {
        labels: [],
        data: [],
        tooltips: []
    }

    docSnap.forEach((doc) => {
        result.labels.push(doc.data().company)
        if(doc.data().endDate==''){
            result.data.push([doc.data().startDate,new Date().toISOString().split('T')[0]])
        }else{
            result.data.push([doc.data().startDate,doc.data().endDate])
        }
    })

    return result;
}
  