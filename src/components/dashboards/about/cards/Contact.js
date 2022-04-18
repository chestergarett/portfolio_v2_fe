import { useState, useEffect } from 'react';
import { db } from '../../../../firebase/config';
import { getContactInfo } from '../../../data/api/about/about';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import MultiMetricCard from '../../../charts/MultiMetricCard';

const Contact = () => {
    const [contact, setContact] = useState(null);
    
    useEffect( ()=> {
        getContactInfo(db)
        .then(res => {
            setContact(res.datasets)
        })
        .catch(err => console.log(err))

    },[])

    return (
        <CgCard>
            <CgCardHeader title='Contact Info'/>
            <CgCardContent>
                <MultiMetricCard data={contact}/>
            </CgCardContent>
        </CgCard>
    )
}

export default Contact;