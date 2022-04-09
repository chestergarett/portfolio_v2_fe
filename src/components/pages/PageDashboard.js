import CgPageLayout from '../ui/CgPageLayout';
import { v4 } from 'uuid';
//icons
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { Grid } from '../../playbook/dragDropResize/Grid';

const data = {
appbar: [
    {name: 'HOME'},
    {name: 'ABOUT'},
],

sidebar: [
    {key: v4(), text: 'Dashboards', icon: <HomeIcon />, link: '/Landing'},
    {key: v4(), text: 'Apps', icon: <DialpadIcon  />, link: '/Calculator'},
],
content: <Grid />
}

const PageDashboard = () => {

    return (
        <CgPageLayout appbar={data.appbar} sidebar={data.sidebar} content={data.content}/>
    )
}

export default PageDashboard;