import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StatusBar from './pages/StatusBar';
import Create from './pages/Create'; 
import SearchBar from './pages/SearchBar';
import Messages from './pages/Messages'; 
import Notifications from './pages/Notifications';



function App() {
  return (
    <Router>
      <Navbar />
      <StatusBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} /> 
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

