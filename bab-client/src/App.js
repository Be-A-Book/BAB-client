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
import Detail from "./pages/Detail";
import Logout from "./pages/Logout";
import Mypage from "./pages/Mypage";
import ReviewWrite from './pages/ReviewWrite';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GuestBook from './pages/Guestbook';

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
            <Route path="/detail" element={<Detail />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/reviewwrite" element={<ReviewWrite />} />
            <Route path="/guestbook" element={<GuestBook />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
