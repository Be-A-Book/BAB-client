import React from "react";
import Footer from "./Footer";
//import { Link, Outlet, NavLink } from 'react-router-dom';
import "../css/Menubar.css";
import logo from "../img/logobab.png";
import { Outlet, NavLink } from "react-router-dom";
import MypageNavbar from "./MypageNavbar";

const Menubar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="left">
          <NavLink to="/">
            <img
              className="nav-logo"
              alt="홈 아이콘"
              src={logo}
              width="60px"
              height="60px"
            />
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink to="/map" className="nav-link">
                {" "}
                Map{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/recommend" className="nav-link">
                {" "}
                Recommend{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookarchive" className="nav-link">
                {" "}
                Book Archive{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/review" className="nav-link">
                {" "}
                Review{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="nav-links">
            <MypageNavbar />
            <li>
              <NavLink to="/login" className="nav-link">
                {" "}
                Login{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="nav-link">
                {" "}
                Sign Up{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Menubar;
