import React, { useState } from "react";
import axios from "axios";

const RegistrationCard = (props) => {
  const [regisValue, setRegisValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    organization: "",
    country: "",
    password: "",
  });

  const handleChange = (event) => {
    setRegisValue({
      ...regisValue,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler1 = async (e) => {
    e.preventDefault();

    let config = {
      method: "POST",
      url: "http://localhost:5000/jupiter",
      data: JSON.stringify({
        email: regisValue.email,
        first_name: regisValue.firstName,
        last_name: regisValue.lastName,
        organization: regisValue.organization,
        country: regisValue.country,
        password: regisValue.password,
      }),
      headers: { "Content-Type": "application/json" },
    };

    console.log(config);
    try {
      const response = await axios(config);
      console.log(response);
      console.log(response.data.bot_str_id);
      props.setBotId(response.data.bot_str_id);
    } catch (error) {
      console.log(error);
    }

    props.setState("connect");
  };

  return (
    <div className="registration-card">
      <div className="header">Registration</div>
      <div className="sub-header">
        Already have an account?<span>Login</span>
      </div>
      <form onSubmit={submitHandler1}>
        <div className="registration-form">
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={regisValue.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="user-details">
            <div className="user-input">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstName"
                value={regisValue.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
              />
            </div>
            <div className="user-input">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={regisValue.lastName}
                onChange={handleChange}
                placeholder="Enter your Last name"
              />
            </div>
            <div className="user-input">
              <label htmlFor="organization">Organization</label>
              <input
                type="text"
                name="organization"
                value={regisValue.organization}
                onChange={handleChange}
                placeholder="Enter Org name"
              />
            </div>
            <div className="user-input">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={regisValue.country}
                onChange={handleChange}
                placeholder="Enter your Country"
              />
            </div>
          </div>
          <div className="input-box">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              value={regisValue.password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="footer">
            <button type="submit" className="cya-btn">
              Create Your Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationCard;
