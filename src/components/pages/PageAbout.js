import { useContext } from 'react';
import DashboardContext from '../context/dashboardContext';
import CgPageLayout from '../ui/CgPageLayout';

const PageAbout = () => {
    const { data } = useContext(DashboardContext);

    return (
        <CgPageLayout appbar={data.appbar} sidebar={data.sidebar} content={data.content.about}/>
    )
}

export default PageAbout;