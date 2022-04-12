import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import PageDashboard from './components/pages/PageDashboard';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<PageDashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
