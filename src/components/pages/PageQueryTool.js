import { useContext } from 'react';
import DashboardContext from '../context/dashboardContext';
import CgPageLayout from '../ui/CgPageLayout';

const PageDashboard = () => {

    const { data } = useContext(DashboardContext);
    
    return (
        <CgPageLayout appbar={data.appbar} sidebar={data.sidebar} content={data.content.queryTool} occupiesViewPort/>
    )
}

export default PageDashboard;