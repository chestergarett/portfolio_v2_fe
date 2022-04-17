import CgPageLayout from '../ui/CgPageLayout';
import { v4 } from 'uuid';
//icons
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { Grid } from '../../playbook/dragDropResize/Grid';
import Resume from '../dashboards/resume/Resume';

const data = {
appbar: [
    {name: 'HOME'},
    {name: 'ABOUT'},
],


sidebar: [
    {key: v4(), text: 'Dashboards', icon: <HomeIcon />},
    {key: v4(), text: 'Resume', link: '/Landing', type: 'dashboard'},
    {key: v4(), text: 'Apps', icon: <DialpadIcon  />},
    {key: v4(), text: 'Fitness', link: 'https://avion-fitness-bot.netlify.app', type: 'app'},
    {key: v4(), text: 'Trading', link: 'https://bwinance.herokuapp.com/', type: 'app'},
    {key: v4(), text: 'Sports', link: 'https://sportsapp-86653.firebaseapp.com', type: 'app'},

],
content: <Resume />
}

const PageDashboard = () => {

    return (
        <CgPageLayout appbar={data.appbar} sidebar={data.sidebar} content={data.content}/>
    )
}

export default PageDashboard;