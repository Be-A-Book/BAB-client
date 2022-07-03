import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
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
      <div className="Login">
        <div classaName="login-title">Login</div>
        <form className="login-input-email">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            id="e-mail"
            value={email}
            onChange={onChangeEmail}
          />
        </form>
        <form className="login-input-password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={onChangePassword}
            onKeyPress={onKeyPress}
          />
        </form>
        <div className="login-start-button">
          <button type="submit" className="login-button" onClick={onClick}>
            start
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
