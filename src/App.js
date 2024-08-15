import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from './components/About';

function App() {
    return (
    <>
      <Router>
    
      <Navbar/>
      <div className='container my-3'>  
        <Routes>
          <Route path='/about' element={<About /> } ></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
