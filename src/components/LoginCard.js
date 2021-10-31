import React from "react";

const LoginCard = () => {
  return (
    <div className="login-card">
      <div className="header">Login</div>

      <div className="form">
        <div className="form-group">
          <label htmlFor="Username">Username</label>
          <input type="text" placeholder="username" />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="password" />
        </div>
      </div>
      <div className="footer">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default LoginCard;
