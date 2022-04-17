import { useState, useEffect } from 'react';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import MultiMetricCard from '../../../charts/MultiMetricCard';
import { getEducation } from '../../../data/api/resume/education';
import { db } from '../../../../firebase/config';

const Education = () => {
    const [education, setEducation] = useState(null)

    useEffect( ()=> {
        getEducation(db)
        .then(res => {
            setEducation(res.datasets)
        })
        .catch(err => console.log(err))
    }
    ,[])

    return(
        <CgCard>
            <CgCardHeader title='Education'/>
            <CgCardContent>
                <MultiMetricCard data={education}/>
            </CgCardContent>
        </CgCard>
    )
}

export default Education;