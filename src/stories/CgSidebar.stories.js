import CgSidebar from '../components/ui/CgSidebar';
import {BrowserRouter as Router} from 'react-router-dom';  
import { v4 } from 'uuid';
//icons
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HelpIcon from '@mui/icons-material/Help';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DialpadIcon from '@mui/icons-material/Dialpad';

export default {
    title: 'Components/CgSidebar',
    component: CgSidebar
}

const Template = args => <Router><CgSidebar {...args} /></Router>

export const Sidebar = Template.bind({})

Sidebar.args = {
    options: [
        {key: v4(), text: 'Feed', icon: <HomeIcon />, link: '/Landing'},
        {key: v4(), text: 'Calculator', icon: <DialpadIcon  />, link: '/Calculator'},
        {key: v4(), text: 'Placeholder', icon: <FastfoodIcon  />, link: '/Landing'},
        {key: v4(), text: 'Placeholder', icon: <FitnessCenterIcon  />, link: '/Landing'},
        {key: v4(), text: 'Placeholder', icon: <NotificationsIcon  />, link: '/Landing'},
        {key: v4(), text: 'Placeholder', icon: <MoveToInboxIcon  />, link: '/Landing'},
        {key: v4(), text: 'Placeholder', icon: <HelpIcon />, link: '/Landing'},
    ]
}