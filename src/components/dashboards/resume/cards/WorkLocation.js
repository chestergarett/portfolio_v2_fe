import { useState, useEffect } from 'react';
import { getWorkLocation } from '../../../data/api/resume/workLocation';
import { db } from '../../../../firebase/config';
import MapCard from '../../../charts/MapCard';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';

const WorkLocation = () => {
    const [location, setLocation] = useState(null)

    useEffect( ()=>{
        getWorkLocation(db)
        .then(res => {
            setLocation(res)
        })
        .catch(err => console.log(err))
    },[])

    return (
        <CgCard>
            <CgCardHeader title="Preferred Work Locations"/>
            <CgCardContent wNoMargin>
                <MapCard data={location}/>
                <div className='flex flex-col text-xs mapText'>
                    <span className='bg-white mb-2'>I prefer fully remote setup but for onsite work, I am open for opportunities around the pinned areas. </span>
                    <span className='bg-white'>I am also open for relocation for work abroad. </span>
                </div>
            </CgCardContent>
        </CgCard>
    )
}

export default WorkLocation;