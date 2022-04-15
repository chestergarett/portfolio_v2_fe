import { doc, getDoc } from 'firebase/firestore/lite';
import CgAvatar from '../../../ui/CgAvatar';

export const getGeneralSkills = async(data) => {
    const docRef = doc(data, 'Skills', 'generalSkills');
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()){
        let result = {
            labels: [],
            data: [],
            icon: [],
            plugins: {}
        }

        const obj = docSnap.data()

        for(var key in obj){
            if (obj.hasOwnProperty(key)){
                result.labels.push(obj[key].name)
                result.data.push(obj[key].yearsOfExp)
                result.icon.push(obj[key].icon)
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
            data: [],
            icon: []
        }

        const obj = docSnap.data()

        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                result.labels.push(obj[key].name)
                result.data.push(obj[key].yearsOfExp)
                result.icon.push(obj[key].icon)
            }
        }

        return result;
    }
}

export const getTechnologies = async(data) => {
    const docRef = doc(data, 'Skills', 'technologies')
    const docSnap = await getDoc(docRef)
    const imageRenderer = (imageUrl) => {
        return (
            <div className="mt-1"><CgAvatar src={imageUrl} width={35} height={30} variant='square'/></div>
        )
    }

    if (docSnap.exists()){
        let result = {
            columnDefs: [
                {
                    headerName: '', 
                    field: 'image', 
                    width: 80,
                    cellRendererFramework: (params)=> {
                        return imageRenderer(params.data.image)
                }},
                {headerName: 'Technology', field: 'name', width: 200},
                {headerName: 'Years of Exp', field: 'yearsOfExp', width: 180},
            ],
            data: []
        }

        const obj = docSnap.data()

        for (var key in obj){
            if (obj.hasOwnProperty(key)){
                // console.log(imageRenderer(obj[key].icon))
                result.data.push({image: obj[key].icon, name: obj[key].name, yearsOfExp: obj[key].yearsOfExp})
            }
        }

        return result;
    }
}