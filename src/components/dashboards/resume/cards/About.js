import { useEffect } from 'react';
import { db } from '../../../../firebase/config';
import { getAboutInfo } from '../../../data/api/resume/about';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';

const About = () => {
    useEffect( ()=> {
        getAboutInfo(db);
    },[])
    
    return (
        <CgCard>

        </CgCard>
    )
}

export default About;