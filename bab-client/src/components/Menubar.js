import React from 'react';
import Footer from './Footer';
// import { Link, Outlet, NavLink } from 'react-router-dom';
import '../css/Menubar.css';
import logo from '../img/logobab.png'
import { Outlet } from 'react-router-dom';
import Mypage from './Mypage';

const Menubar = () => {
        return (
            <div>
              <div className="navbar">
                <div className='left'>
                    <img className='nav-logo' alt="홈 아이콘" src={logo} width="60px" height="60px"/>
                    <ul className="nav-links">
                      <li>
                        Map
                        {/* <NavLink to="/map" className="nav-link"> Map </NavLink> */}
                      </li>
                      <li>
                        Recommend
                        {/* <NavLink to="/recommend" className="nav-link"> Recommend </NavLink> */}
                      </li>
                      <li>
                        Book Archive
                        {/* <NavLink to="/bookarchive" className="nav-link"> Book Archive </NavLink> */}
                      </li>
                      <li>
                        Review
                        {/* <NavLink to="/review" className="nav-link"> Review </NavLink> */}
                      </li>
                    </ul>
                </div>
                <div className='right'>
                  <ul className="nav-links">
                    <Mypage />
                    <li>
                      Login
                      {/* <NavLink to="/login" className="nav-link"> Login </NavLink> */}
                    </li>
                    <li>
                      Sign Up
                      {/* <NavLink to="/signup" className="nav-link"> Sign Up </NavLink> */}
                    </li>
                  </ul>
                </div>
                
              </div>
              <div>
                <Outlet />
              </div>
              <div>
                <Footer/>
              </div>
            </div>
        );
    };

export default Menubar;