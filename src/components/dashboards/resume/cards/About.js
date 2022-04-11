import { useState, useEffect } from 'react';
import { db } from '../../../../firebase/config';
import { getAboutInfo } from '../../../data/api/resume/about';
import CgCard from '../../../ui/CgCard';
import CgCardHeader from '../../../ui/CgCardHeader';
import CgCardContent from '../../../ui/CgCardContent';
import CgAvatar from '../../../ui/CgAvatar';

const About = () => {
    const [about, setAbout] = useState({})
    useEffect( ()=> {
        getAboutInfo(db)
            .then(res => setAbout(res[0]))
            .catch(err => console.log(err));
    },[])
    
    console.log(about.name)
    return (
        <CgCard>
            <CgCardHeader title={about.name}/>
            <CgCardContent>
                <CgAvatar src={about.url} width={80} height={80} />
                <div>{about.address}</div>
                <div>{about.description}</div>
            </CgCardContent>
        </CgCard>
    )
}

export default About;