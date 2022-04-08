import CgPageLayout from '../ui/CgPageLayout';
import { v4 } from 'uuid';
//icons
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HelpIcon from '@mui/icons-material/Help';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DialpadIcon from '@mui/icons-material/Dialpad';

const data = {
appbar: [
    {name: 'HOME'},
    {name: 'ABOUT'},
],
sidebar: [
    {key: v4(), text: 'Dashboards', icon: <HomeIcon />, link: '/Landing'},
    {key: v4(), text: 'Apps', icon: <DialpadIcon  />, link: '/Calculator'},
],
content: <div>Testing body</div>
}

const PageDashboard = () => {

    return (
        <CgPageLayout appbar={data.appbar} sidebar={data.sidebar} content={data.content}/>
    )
}

export default PageDashboard;