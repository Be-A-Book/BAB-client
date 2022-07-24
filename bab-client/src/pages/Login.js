import React, { useState, useEffect } from "react";
import "../css/Login.css";
import axios from 'axios';
import { useDispatch } from "react-redux";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  

  const onClick = () => {
    setEmail("");
    setPassword("");

    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <div className="Login">
        <div classaName="login-title">Login</div>
        <form className="login-input-email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            id="login-email"
            value={email}
            onChange={onChangeEmail}
          />
        </form>
        <form className="login-input-password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="login-password"
            value={password}
            onChange={onChangePassword}
            onKeyPress={onKeyPress}
          />
        </form>
        <div className="login-start-button">
          <button type="submit" className="login-button" onClick={onClick}>
            Start
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
