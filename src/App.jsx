import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StatusBar from './pages/StatusBar';

function App() {
  return (
    <Router>
      <Navbar />
      <StatusBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path='/StatusBar' element ={<StatusBar/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
