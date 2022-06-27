import React from "react";
import "./App.css";
import Menubar from "./components/Menubar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Recommand from "./pages/Recommend";
import BookArchive from "./pages/BookArchive";
import Review from "./pages/Review";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Menubar />}>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/recommend" element={<Recommand />} />
            <Route path="/bookarchive" element={<BookArchive />} />
            <Route path="/review" element={<Review />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
