import React from "react";
import RegisterCard from "./RegisterCard";
import Connect from "./ConnectPage";
const RegistrationPage = (props) => {
  const btnHandler = () => {
    props.setRegistration(!props.registration);
    props.setConnect(!props.connect);
  };
  return (
    <div className="container">
      <div className="registration">
      {props.state === "login" && (
         <RegisterCard setState={props.setState} setBotId={props.setBotId}/>
        )}

        {props.state === "connect" && (
          <Connect botid={props.botid} setBotId={props.setBotId} />
        )}
        {/* <RegisterCard /> */}

        {/* <div className="footer">
            <button className="cya-btn" onClick={btnHandler}>
              Create Your Account
            </button>
          </div> */}
      </div>
    </div>
  );
};

export default RegistrationPage;
