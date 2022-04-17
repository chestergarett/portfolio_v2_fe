import {useState,useContext, useEffect} from 'react';
import DashboardContext from './dashboardContext';

const DashboardProvider = (props) => {
    const {dashboards} = useContext(DashboardContext);
    const [editMode, setEditMode] = useState(dashboards.editMode);
    const handleEditToggle = () => {
        setEditMode(prevCheck => !prevCheck)
    }

    return ( 
        <DashboardContext.Provider value={{editMode, handleEditToggle}}>
            {props.children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider;