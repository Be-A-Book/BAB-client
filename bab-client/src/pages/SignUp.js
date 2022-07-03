import React, { useState } from "react";
import "../css/SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);

  const onClick = () => {
    alert("E-mail : " + email + "\nPassword : " + password);
    setEmail("");
    setPassword("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <div className="SignUp">
        <div className="sign-up-title">Sign Up</div>
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
