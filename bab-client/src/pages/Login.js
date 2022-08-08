import React from "react";
import "../css/Login.css";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {setToken} from "../redux/reducers/AuthReducer";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from '../utils/cookie';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = async (values) => {
    const {email, password} = values;
    try {
      await axios({
        method: "post",
        url: "/api/users/login",
        data: {
          email,
          password,
        }
      })
      toast.success(<div className='toast'>로그인이 완료되었습니다! 😎</div>, {
        position: "top-center",
        autoClose: 2000
      });
      setTimeout(()=> {
          navigate("/");
      }, 2000);
      console.log('로그인 성공');
      console.log(`${getCookie('x_auth')}`)
      dispatch(setToken(`${getCookie('x_auth')}`))


    } catch (e) {
      // 서버에서 받은 에러 메시지 출력
      console.log(e.response.data.message);
      toast.error(<div className='toast'>로그인을 실패하였어요 😭</div>, {
        position: "top-center",
    });
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
        <ToastContainer/>
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
