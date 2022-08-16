import React from "react";
import "../css/SignUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const submit = async (values) => {
    const { name, email, password } = values || {};
    axios({
      method: "post",
      url: `https://beabook-server.herokuapp.com/api/users/register`,
      data: {
        name,
        email,
        password,
      },
    })
      .then((response) => {
        if (response.data.success === true) {
          console.log("회원가입 성공", response.data);
          toast.success(
            <div className="toast">
              회원가입이 완료되었습니다.
              <br />
              로그인 하세요😎
            </div>,
            {
              position: "top-center",
              autoClose: 2000,
            }
          );
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          console.log("회원가입 실패", response.data);
          toast.error(<div className="toast">회원가입을 실패하였어요 😭</div>, {
            position: "top-center",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error(<div>회원가입을 실패하였어요 😭</div>, {
          position: "top-center",
        });
      });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={submit}
    >
      {({ values, handleSubmit, handleChange }) => (
        <div className="SignUp">
          <ToastContainer />
          <div className="sign-up-title">Sign Up</div>
          <form className="SignUp" onSubmit={handleSubmit} autoComplete="off">
            <div className="sign-up-input-name">
              <input
                type="text"
                name="name"
                placeholder="Enter the Name"
                id="sign-up-name"
                value={values.name}
                onChange={handleChange}
                autoComplete="on"
              />
            </div>
            <div className="sign-up-input-email">
              <input
                type="email"
                name="email"
                placeholder="Enter the E-mail"
                id="sign-up-email"
                value={values.email}
                onChange={handleChange}
                autoComplete="on"
              />
            </div>
            <div className="sign-up-input-password">
              <input
                type="password"
                name="password"
                placeholder="Enter the Password"
                id="sign-up-password"
                value={values.password}
                onChange={handleChange}
                autoComplete="on"
              />
            </div>

            <div className="sign-up-finish-button">
              <button type="submit" className="sign-up-button">
                Finish
              </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
