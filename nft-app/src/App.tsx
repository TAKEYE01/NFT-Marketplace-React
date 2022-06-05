import Landing from './pages/index';
import Signup from './pages/signup';
import Login from './pages/login';
import Market from './pages/market';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import { useState } from 'react';

function App() {

  const [profile, setProfile] = useState("");

  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Landing profile={profile} setProfile={setProfile}/>}/>
          <Route path="/signup" element={<Signup profile={profile} setProfile={setProfile}/>}/>
          <Route path="/login" element={<Login setProfile={setProfile} profile={profile}/>}/>
          <Route path="/market" element={<Market profile={profile} setProfile={setProfile}/>}/>
        </Routes>
    </Router>
  );
}

export default App;
