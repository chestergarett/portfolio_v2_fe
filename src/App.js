import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import PageDashboard from './components/pages/PageDashboard';
import DashboardProvider from './components/context/dashboardProvider';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables)

const App = () => {
  
  return (
    <DashboardProvider>
      <Router>
        <Routes>
            <Route path='/' exact element={<PageDashboard/>} />
        </Routes>
      </Router>
    </DashboardProvider>
  );
}

export default App;
