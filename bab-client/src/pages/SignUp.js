import React from "react";
import "../css/SignUp.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik"

const SignUp = () => {
  const navigate = useNavigate();
  const submit = async (values) => {
      const { name, email, password } = values || {} ;
      axios({
        method:"post",
        url:`api/users/register`,
        data: {
          name,
          email,
          password,
          }
      }).then((response) => {
        if(response.data.success === true){
            console.log("회원가입 성공", response.data)
             navigate("/login");
            // setPopup({
            //     open: true,
            //     title: "Confirm",
            //     message: "Join Success!",
            //     callback: function(){
            //         navigate("/login");
            //     }
            // });
        } else {
            console.log("회원가입 실패", response.data)
            // setPopup({
            //     open: true,
            //     title: "Error",
            //     message: message
            // });
      }
    }).catch(function (error) {
        console.log(error);
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
        {({values, handleSubmit, handleChange}) => (
            <div className="SignUp">
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
                            autoComplete = "on"
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
                            autoComplete = "on"
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
                            autoComplete = "on"
                        />
                    </div>
                    <div className="sign-up-finish-button">
                        <button type="submit" className="sign-up-button" >
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
