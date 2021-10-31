import React from "react";

const Connect = () => {
  return (
    <div className="section">
      <div className="top-text">Connect your Facebook Massenger here</div>
      <div className="card">
        <div className="steps">
          <div className="step">
            <div className="dot">1</div>
            <div className="text">Login with Facebook</div>
          </div>
          <div className="step">
            <div className="dot">2</div>
            <div className="text">Select the page</div>
          </div>
          <div className="step">
            <div className="dot">3</div>
            <div className="text">Click on Connect to deploy</div>
          </div>
        </div>

        <button>Login with <span>FaceBook</span></button>
        <div className="pages">
          <div className="page">
            <div className="image"></div>
            <div className="page-name">Page Name</div>
          </div>

          <div className="page">
            <div className="image"></div>
            <div className="page-name">Page Name</div>
          </div>

          <div className="page">
            <div className="image"></div>
            <div className="page-name">Page Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
