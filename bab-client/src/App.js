import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './pages/Home';
import Map from './pages/Map';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
  <>
  <Router>
    <Routes>
        <Route path ="/" element={<Menubar />} >
        <Route path ="/" element={<Home />} />
        <Route path ="/map" element={<Map />} />
        </Route>
    </Routes>
    </Router>
  </>
  );
};

export default App;