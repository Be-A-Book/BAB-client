import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../css/Logout.css";
import logo from "../img/logobab.png";
import { setToken } from "../redux/reducers/AuthReducer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Logout = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onclick = async () => {
    toast.success(
      <div className="toast">로그아웃되었습니다. 또 만나요 👋</div>,
      {
        position: "top-center",
        autoClose: 2000,
      }
    );
    axios({
      method: "get",
      url: "https://beabook-server.herokuapp.com/api/users/logout",
    });
    await dispatch(setToken(""));
    console.log();
    console.log("로그아웃되었습니다.");
    localStorage.removeItem("userId");
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 2000);
  };
  return (
    <>
      <div className="Logout">
        <ToastContainer />
        <div className="logout-title">Log Out</div>
        <div className="logout-text">Are you sure you want to log out?</div>

        <div className="logout-button">
          <button className="logout-yes-button" onClick={onclick}>
            Yes
          </button>
          <button className="logout-no-button">No</button>
        </div>
      </div>
    </>
  );
};

export default Logout;
