import React from 'react';
import Landing from './pages/index';
import Signup from './pages/signup';
import Login from './pages/login';
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
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
    </Router>
  );
}

export default App;
