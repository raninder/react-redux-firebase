import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
         <Route path="/" element={<Dashboard/>} />
         <Route path="/project/:id" element = {<ProjectDetails/>} />
      </Routes>  
    </div>
    </Router>
  );
}

export default App;
