import React from "react";
import RegisterCard from "./RegisterCard";

const RegistrationPage = () => {
  return (
    <div className="container">
      <div className="registration">
        <RegisterCard />
        <div className="footer">
          <button className="cya-btn">Create Your Account</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
