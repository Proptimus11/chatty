import React, { useState } from "react";
import LoginCard from "../components/LoginCard";
import Connect from "./ConnectPage";

const Login = (props) => {
  // const [state, setState] = useState("login");
  const clickHandler = () => {
    props.setRegistration(!props.registration);
    props.setLogin(!props.setLogin);
  };
  return (
    <div className="container">
      <div className="login">
        <div className="title-text">Chatty ChatBot</div>
        {props.state === "login" && (
          <LoginCard
            botid={props.botid}
            setBotId={props.setBotId}
            setState={props.setState}
          />
        )}

        {props.state === "connect" && (
          <Connect botid={props.botid} setBotId={props.setBotId} />
        )}
        {/* <LoginCard botid={props.botid} setBotId={props.setBotId} /> */}
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
