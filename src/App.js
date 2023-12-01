import React, { useEffect } from 'react'
import Home from './components/Home.jsx';
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
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
