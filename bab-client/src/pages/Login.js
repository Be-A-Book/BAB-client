import React, { useState, useEffect } from "react";
import "../css/Login.css";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {Formik, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";
import {setToken} from "../redux/reducers/AuthReducer";

const Login = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submit = async (values) => {
    const {email, password} = values;
    try {
      const {data} = await axios({
        method: "post",
        url: "/api/users/login",
        data: {
          email,
          password,
        }
      });
      dispatch(setToken(data.jwt));
      console.log('로그인 성공');
      navigate("/");
    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e.response.data.message);
    }
  };


  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={submit}
    >
    {({values, handleSubmit, handleChange}) => (
      <div className="Login">
        <div className="login-title">Login</div>
        <form className='Login' onSubmit={handleSubmit}>
        <div className="login-input-email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            id="login-email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="login-input-password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="login-password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-start-button">
          <button type="submit" className="login-button">
            Start
          </button>
        </div>
        </form>
      </div>
    )}
      </Formik>
  );
};

export default Login;
