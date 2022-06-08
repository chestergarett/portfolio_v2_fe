import {createContext} from 'react';
import { v4 } from 'uuid';
import HomeIcon from '@mui/icons-material/Home';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Resume from '../dashboards/resume/Resume';
import About from '../dashboards/about/About';

const DashboardContext = createContext({
    dashboards: {
        editMode: false,
    },
    data: {
        appbar: [
            {name: 'HOME', link: '/'},
            {name: 'ABOUT', link: '/about'},
        ],
        sidebar: [
            {key: v4(), text: 'Dashboards', icon: <HomeIcon />},
            {key: v4(), text: 'Resume', link: '/', type: 'dashboard'},
            {key: v4(), text: 'Apps', icon: <DialpadIcon  />},
            {key: v4(), text: 'Fitness', link: 'https://avion-fitness-bot.netlify.app', type: 'app'},
            {key: v4(), text: 'Trading', link: 'https://bwinance.herokuapp.com/', type: 'app'},
            {key: v4(), text: 'Sports', link: 'https://sportsapp-86653.firebaseapp.com', type: 'app'},
            {key: v4(), text: 'Other Works', link: 'https://chestergarett-portfolio-ff9f1e.netlify.app', type: 'app'},
        
        ],
        content: {
            resume: <Resume />,
            about: <About />
        }
    }
});

export default DashboardContext;