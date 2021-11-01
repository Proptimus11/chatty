import React from "react";
import RegisterCard from "./RegisterCard";

const RegistrationPage = (props) => {
  const btnHandler = () => {
    props.setRegistration(!props.registration);
    props.setConnect(!props.connect);
  };
  return (
    <div className="container">
      <div className="registration">
        <RegisterCard />
        <div className="footer">
          <button className="cya-btn" onClick={btnHandler}>
            Create Your Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
