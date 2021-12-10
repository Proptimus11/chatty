import React from "react";
import axios from "axios";

const Connect = (props) => {
  const connectHandler = async () => {
    try {
      const Url = `https://3861-2405-201-5c06-e143-5bd-3117-51c3-41fb.ngrok.io/earth/install/${props.botid}`;
      const config = {
        method: "GET",
        url: Url,
      };
      console.log(config);
      const response = await axios(config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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

        <button type="submit" onClick={connectHandler}>
          Connect with <span>FaceBook</span>
        </button>
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
