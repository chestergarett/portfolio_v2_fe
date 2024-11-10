import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import DashboardProvider from './components/context/dashboardProvider';
import PageDashboard from './components/pages/PageDashboard';
import PageAbout from './components/pages/PageAbout';
import PageQueryTool from './components/pages/PageQueryTool';
import PagePortfolio from './components/pages/PagePortfolio';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

const App = () => {
   
  return (
    <DashboardProvider>
      <Router>
        <Routes>
            <Route path='/' exact element={<PageDashboard/>} />
            <Route path='/about'  element={<PageAbout/>} />
            <Route path='/portfolio'  element={<PagePortfolio/>} />
            <Route path='/queryTool'  element={<PageQueryTool />} />
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;
