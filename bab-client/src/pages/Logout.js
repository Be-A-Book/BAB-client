import React from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import "../css/Logout.css";
import logo from "../img/logobab.png";
import {setToken} from "../redux/reducers/AuthReducer";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useCookies } from 'react-cookie';

const Logout = () => {

  const COOKIE_KEY = window.LOGIN_KEY; // 상수화시킨 쿠키 값을 넣어줬다.
  
  const [, , removeCookie] = useCookies([COOKIE_KEY]); // 쓰지 않는 변수는 (공백),처리해주고 removeCookie 옵션만 사용한다

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onclick = async() => {
    toast.success(<div className='toast'>로그아웃되었습니다. 또 만나요 👋</div>, {
      position: "top-center",
      autoClose: 2000
  });
  axios ({
    method: "get",
    url: "/api/users/logout"
  })
    removeCookie('x_auth');    // 쿠키삭제후
    await dispatch(setToken(""));
    console.log()
    console.log("로그아웃되었습니다.");
    setTimeout(()=> {
      navigate("/");
  }, 2000);
    
  }
  return (
    <>
      <div className="Logout">
        <ToastContainer/>
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
