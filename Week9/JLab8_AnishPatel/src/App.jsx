import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Question from './components/Question';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Question />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
