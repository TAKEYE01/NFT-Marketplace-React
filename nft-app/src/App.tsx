import React from 'react';
import Landing from './pages/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
        </Routes>
    </Router>
  );
}

export default App;