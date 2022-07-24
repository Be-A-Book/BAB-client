import React from "react";
import "../css/Recommend.css";
import { NavLink } from "react-router-dom";

const Recommend = () => {
  return (
    <>
      <div className="recommend">
        <div className="recommend-title"></div>
        <div className="recommend-content">
          <button className="taste-test"></button>
          <NavLink to ="/guestbook">
            <button className="guest-book"></button>
          </NavLink>
          <button className="tbd"></button>
        </div>
      </div>
    </>
  );
};

export default Recommend;
