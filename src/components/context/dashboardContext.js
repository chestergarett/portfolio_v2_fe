import {createContext} from 'react';
import { v4 } from 'uuid';
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Resume from '../dashboards/resume/Resume';
import About from '../dashboards/about/About';
import Portfolio from '../dashboards/portfolio/Portfolio';
import QueryTool from '../queryTool/QueryTool';

const DashboardContext = createContext({
    dashboards: {
        editMode: false,
    },
    data: {
        appbar: [
            {name: 'HOME', link: '/'},
            {name: 'QUERY TOOL', link: '/queryTool'},
            {name: 'PORTFOLIO', link: '/portfolio'},
            {name: 'ABOUT', link: '/about'},
        ],
        sidebar: [
            {key: v4(), text: 'Dashboards', icon: <HomeIcon />},
            {key: v4(), text: 'Resume', link: '/', type: 'dashboard'},
            {key: v4(), text: 'Apps', icon: <DialpadIcon  />},
        ],
        content: {
            resume: <Resume />,
            about: <About />,
            queryTool: <QueryTool />,
            portfolio: <Portfolio />
        }
    }
});

export default DashboardContext;