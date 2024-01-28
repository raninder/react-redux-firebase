import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
         <Route path="/" element={<Dashboard/>} />
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
