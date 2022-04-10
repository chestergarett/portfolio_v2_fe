import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';  
import PageDashboard from './components/pages/PageDashboard';

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
