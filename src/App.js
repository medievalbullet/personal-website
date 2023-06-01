import React from 'react'
import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(name) {
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
