import React from "react";
import LoginCard from "../components/LoginCard";

const Login = (props) => {
  const clickHandler = () => {
    props.setRegistration(!props.registration);
    props.setLogin(!props.setLogin);
    console.log(props.registration);
  };
  return (
    <div className="container">
      <div className="login">
        <div className="title-text">Chatty ChatBot</div>
        <LoginCard />
        <div className="footer-main">
          <h4>New to our site? Register</h4>
          <button className="btn" onClick={clickHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
