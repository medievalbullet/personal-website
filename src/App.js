import React, { useEffect } from 'react'
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import './styles/index.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ApplyAnim from './scripts/ApplyAnim';


// MAIN APP FUNCTION
function App(name) {

  // ON PAGE LOAD
  useEffect(() => {

    // APPLY ANIMATIONS
    ApplyAnim(".slide-in-element", "slide-in-active")
  
  }, []);

  // MAIN APP
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <TopNavbar />
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <div className="footer">
          <div>© {new Date().getFullYear()}, Built with React by Mastershaff, All Rights Reserved.</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
