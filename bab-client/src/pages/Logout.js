import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "../css/Logout.css";
import logo from "../img/logobab.png";
import {setToken} from "../redux/reducers/AuthReducer";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onclick = async() => {

    await dispatch(setToken(""));
    console.log("로그아웃되었습니다.");
    navigate("/")
  }
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
          <button className="logout-yes-button" onClick={onclick}>Yes</button>
          <button className="logout-no-button">No</button>
        </div>
      </div>
    </>
  );
};

export default Logout;
