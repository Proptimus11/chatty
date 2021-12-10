import React, { useState } from "react";
import axios from "axios";
import Connect from "./ConnectPage";

const LoginCard = (props) => {
  const [formValue, setformValue] = useState({
    email: "",
    password: "",
  });

  const clickHandler = async (e) => {
    try {
      e.preventDefault();

      let config = {
        method: "POST",
        url: "http://localhost:5000/saturn",
        data: JSON.stringify({
          email: formValue.email,
          password: formValue.password,
        }),
        headers: { "Content-Type": "application/json" },
      };

      console.log(config);
      const response = await axios(config);
      // console.log(response);
      // console.log(response.data.bot_str_id);
      props.setBotId(response.data.bot_str_id);
      console.log(props.botid);
      props.setState("connect");
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();

      let config = {
        method: "POST",
        url: "http://localhost:5000/saturn",
        data: JSON.stringify({
          email: formValue.email,
          password: formValue.password,
        }),
        headers: { "Content-Type": "application/json" },
      };

      console.log(config);
      const response = await axios(config);
      // console.log(response);
      // console.log(response.data.bot_str_id);
      props.setBotId(response.data.bot_str_id);
      console.log(props.botid);
    } catch (error) {
      console.log(error);
    }

    props.setState("connect");
  };

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="login-card">
      <div className="header">Login</div>

      <div className="form">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="Username">Username</label>
            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              placeholder="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              value={formValue.password}
              onChange={handleChange}
              placeholder="password"
            />
          </div>
          <div className="form-group footer">
            <button
              type="submit"
              className="btn login-btn"
              onClick={clickHandler}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
