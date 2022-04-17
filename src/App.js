import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import DashboardProvider from './components/context/dashboardProvider';
import PageDashboard from './components/pages/PageDashboard';
import PageAbout from './components/pages/PageAbout'
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

const App = () => {
  
  return (
    <DashboardProvider>
      <Router>
        <Routes>
            <Route path='/' exact element={<PageDashboard/>} />
            <Route path='/about'  element={<PageAbout/>} />
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;
