import { doc, getDoc } from 'firebase/firestore/lite';

export const getGeneralSkills = async(data) => {
    const docRef = doc(data, 'Skills', 'generalSkills');
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()){
        let result = {
            labels: [],
            data: []
        }
        const obj = docSnap.data()

        for(var key in obj){
            if (obj.hasOwnProperty(key)){
                result.labels.push(obj[key].name)
                result.data.push(obj[key].yearsOfExp)
            }
        }

        return result;
    }
}

export const getProgrammingLanguages = async(data) => {
    const docRef = doc(data, 'Skills', 'programmingLanguages')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        let result = {
            labels: [],
            data: []
        }

        const obj = docSnap.data()

        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                result.labels.push(obj[key].name)
                result.data.push(obj[key].yearsOfExp)
            }
        }

        return result;
    }
}

export const getFrameworks = async(data) => {
    const docRef = doc(data, 'Skills', 'frameworks')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        let result = {
            labels: [],
            data: []
        }

        const obj = docSnap.data()

        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                result.labels.push(obj[key].name)
                result.data.push(obj[key].yearsOfExp)
            }
        }

        return result;
    }
}

export const getTechnologies = async(data) => {
    const docRef = doc(data, 'Skills', 'technologies')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()){
        let result = {
            columnDefs: [
                {headerName: 'Technology', field: 'name'},
                {headerName: 'Years of Exp', field: 'yearsOfExp'}
            ],
            data: []
        }

        const obj = docSnap.data()

        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                result.data.push({name: obj[key].name, yearsOfExp: obj[key].yearsOfExp})
            }
        }

        return result;
    }
}