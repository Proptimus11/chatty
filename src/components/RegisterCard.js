import React from "react";

const RegistrationCard = () => {
  return (
    <div className="registration-card">
      <div className="header">Registration</div>
      <div className="sub-header">Already have an account?<span>Login</span></div>

      <div className="registration-form">
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="user-details">
          <div className="user-input">
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div className="user-input">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter your Last name" />
          </div>
          <div className="user-input">
            <label htmlFor="organization">Organization</label>
            <input type="text" placeholder="Enter Org name" />
          </div>
          <div className="user-input">
            <label htmlFor="country">Country</label>
            <input type="text" placeholder="Enter your Country" />
          </div>
        </div>
        <div className="input-box">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="password" />
        </div>
      </div>
    </div>
  );
};

export default RegistrationCard;
