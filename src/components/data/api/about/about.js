import { collection, getDocs } from 'firebase/firestore/lite';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
             <GoogleIcon style={{fontSize: '2.5rem'}}/>
        </Link>
    );
};

export const getContactInfo = async(data) => {
    let result = {
        datasets: []
    }

    const snapshot = collection(data, 'Contact');
    const docs = await getDocs(snapshot);
    
    docs.docs.map(doc => {
        if(doc.data().github){
            result.datasets.push({title: <IconButton href={doc.data().github} target='_blank'><GitHubIcon style={{fontSize: '1.5rem'}}/></IconButton>, subtitle1: 'GitHub'})
        }
        if(doc.data().email){
            result.datasets.push({title: <IconButton><ButtonMailto mailto={`mailto:${doc.data().email}`}/></IconButton>, subtitle1: `Email`})
        }
        if(doc.data().linkedin){
            result.datasets.push({title: <IconButton href={doc.data().linkedin}><LinkedInIcon style={{fontSize: '1.5rem'}}/></IconButton>, subtitle1: 'Linkedin'})
        }
    });

    return result;
}