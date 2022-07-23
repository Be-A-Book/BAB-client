import React, { useEffect, useState } from "react";
import "../css/SignUp.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [Popup, setPopup] = useState(false);

  const navigate = useNavigate();
  const onChangeName = (e) => setName(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onClick = () => {
    alert("Name : " + name + "E-mail : " + email + "\nPassword : " + password);
    setEmail("");
    setPassword("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  
  useEffect (() => { 
    function Popup({open, setPopup, message, title, callback}) {
      const handleClose = () => {
        setPopup({open: false});
        if(callback){
          callback();
        }
      }
    }

    axios({
        method:"post",
        url:`/users/register`,
        data: {
          "name": name,
          "email": email,
          "password": password,
          }
      }).then((response) => {
        if(response.data.code === 0){
            setPopup({
                open: true,
                title: "Confirm",
                message: "Join Success!", 
                callback: function(){
                    navigate("/login");
                }
            });
        } else {
            let message = response.data.message;
            if(response.data.code === 10000){
                message = "User ID is duplicated. Please enter a different User ID. "
            }
            setPopup({
                open: true,
                title: "Error",
                message: message
            });
      }
    }).catch(function (error) {
        console.log(error);
});

});

  return (
    <>
      <div className="SignUp">
        <div className="sign-up-title">Sign Up</div>
        <form className="sign-up-input-name">
          <input
            type="name"
            name="name"
            placeholder="Enter the Name"
            id="sign-up-name"
            value={name}
            onChange={onChangeName}
          />
        </form>
        <form className="sign-up-input-email">
          <input
            type="email"
            name="email"
            placeholder="Enter the E-mail"
            id="sign-up-email"
            value={email}
            onChange={onChangeEmail}
          />
        </form>
        <form className="sign-up-input-password">
          <input
            type="password"
            name="password"
            placeholder="Enter the Password"
            id="sign-up-password"
            value={password}
            onChange={onChangePassword}
            onKeyPress={onKeyPress}
          />
        </form>
        <div className="sign-up-finish-button">
          <button type="submit" className="sign-up-button" onClick={onClick}>
            Finish
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
