import React from "react";
import "../css/Logout.css";
import logo from "../img/logobab.png";

const Logout = () => {
  return (
    <>
      <div className="Logout">
        <div className="logout-title">Log Out</div>
        <div className="logout-text">Are you sure you want to log out?</div>
        <img
          className="bab-logo"
          alt="Be A Book 로고"
          src={logo}
          width="60px"
          height="60px"
        />
        <div className="logout-button">
          <button className="logout-yes-button">Yes</button>
          <button className="logout-no-button">No</button>
        </div>
      </div>
    </>
  );
};

export default Logout;
