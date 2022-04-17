import {createContext} from 'react';

const DashboardContext = createContext({
    dashboards: {
        editMode: false,
    }
});

export default DashboardContext;